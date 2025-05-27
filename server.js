import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import hostelRoutes from './routes/hostelRoutes.js';
import authRoutes from './routes/AuthRoutes.js';

dotenv.config();

const app = express();
app.use(cors({
    origin: ['hostel-world-frontend.vercel.app'],
    credentials: true
}))
app.use(express.json());

app.use('/api/hostels', hostelRoutes);

app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch(err => console.error(err));