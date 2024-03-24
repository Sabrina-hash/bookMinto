import express from 'express';
import offerController from './offerController'; 
const router = express.Router();

router.post('/offers', offerController.createOffer);
router.get('/offers/:userId', offerController.getOffersByUserId);
router.put('/offers/:offerId', offerController.updateOffer);
router.delete('/offers/:offerId', offerController.deleteOffer);

module.exports = router;
