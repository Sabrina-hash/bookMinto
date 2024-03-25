import mongoose from "mongoose";

const notificationSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['offer made', 'offer accepted', 'offer rejected'],
    },
    message: {
        type: String,
        required: true,
    },
    offerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Offer',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    read: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;