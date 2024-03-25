import express from 'express';
const router = express.Router();

import {
    createOffer,
    getOffersByUserId,
    updateOffer,
    deleteOffer,
 } from '../controllers/offerController.js';

router.post('/offers', createOffer);
router.get('/offers/:userId', getOffersByUserId);
router.put('/offers/:offerId', updateOffer);
router.delete('/offers/:offerId', deleteOffer);

export default router;
