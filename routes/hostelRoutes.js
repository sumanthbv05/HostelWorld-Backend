import express from 'express';
import Hostel from '../models/Hostel.js';
import Booking from '../models/Booking.js'

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const { city } = req.query;
        const query = city ? { city: { $regex: city, $options: 'i' } } : {};
        const hostels = await Hostel.find(query);
        res.json(hostels);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch hostels' });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id);
        if (!hostel) return res.status(404).json({ error: 'Hostel not found' });
        res.json(hostel);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch hostel' });
    }
});

router.post('/:id/reviews', async (req, res) => {
  const { id } = req.params;
  const { user, comment, rating } = req.body;

  try {
    const hostel = await Hostel.findById(id);
    if (!hostel) {
      return res.status(404).json({ message: 'Hostel not found' });
    }

    // Add new review to the reviews array
    hostel.reviews.push({ user, comment, rating });

    // Update overall rating (optional, you can calculate average here)
    const totalRating = hostel.reviews.reduce((acc, r) => acc + r.rating, 0);
    hostel.rating = totalRating / hostel.reviews.length;

    await hostel.save();

    res.status(201).json(hostel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/:id/book', async (req, res) => {
  const { id } = req.params;
  const { userName, userEmail, fromDate, toDate } = req.body;

  if (!userName || !userEmail || !fromDate || !toDate) {
    return res.status(400).json({ message: 'Please fill all booking details' });
  }

  try {
    const booking = new Booking({
      hostel: id,
      userName,
      userEmail,
      fromDate,
      toDate
    });

    await booking.save();

    res.status(201).json({ message: 'Booking successful', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
