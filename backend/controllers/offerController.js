import Offer from "../models/offerModel.js";

// Create an offer
const createOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body);
    await offer.save();

    const notification = await createNotification(offer);

    res.status(201).json(offer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all offers for a particular user
const getOffersByUserId = async (req, res) => {
  try {
    const offers = await Offer.find({ receiverId: req.params.userId });
    res.json(offers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an offer's status
const updateOffer = async (req, res) => {
  try {
    const offer = await Offer.findByIdAndUpdate(
      req.params.offerId,
      { status: req.body.status },
      { new: true }
    );
    if (!offer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.json(offer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an offer
const deleteOffer = async (req, res) => {
  try {
    const offer = await Offer.findByIdAndDelete(req.params.offerId);
    if (!offer) {
      return res.status(404).json({ message: 'Offer not found' });
    }
    res.json({ message: 'Offer deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createNotification = async (offer) => {
  try {

    const notification = new Notification({
      userId: offer.receiverId,
      message: 'New offer received: ${offer.offerAmount}',
      type: 'offer'

    });
    await notification.save();
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    throw new Error('Failed to create notification');
  }
};

export { createOffer, getOffersByUserId, updateOffer, deleteOffer };