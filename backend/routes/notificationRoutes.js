// routes/notificationRoutes.js
import express from 'express';
import Notification from '../models/notificationModel.js';
const router = express.Router();

// Fetch user notifications
router.get('/notifications/:userId', async (req, res) => {
    try {
        const { read } = req.query;
        const query = { userId: req.params.userId };

        if (read !== undefined) {
            query.read = read === 'true';
        }

        const notifications = await Notification.find(query);
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;