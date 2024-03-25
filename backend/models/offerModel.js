import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product', // Assuming 'Product' is the model name for products
      },
      offerer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Reference to the User model, the one who makes the offer
      },
      offeree: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Reference to the User model, the one who receives the offer
      },
      offerAmount: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
        enum: ['pending', 'accepted', 'rejected'], // Enforce the status values
        default: 'pending', // Default status is 'pending'
      },
    },
    {
      timestamps: true, // Includes createdAt and updatedAt fields automatically
    }
  );
  
  const Offer = mongoose.model('Offer', offerSchema);
  
export default Offer;