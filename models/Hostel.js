import mongoose from 'mongoose';

const hostelSchema = new mongoose.Schema({
    name: String,
    city: String,
    description: String,
    rating: Number,
    price: Number,
    image: String,
    reviews: [
        {
            user: String,
            comment: String,
            rating: Number
        }
    ]
});

export default mongoose.model('Hostel', hostelSchema);
