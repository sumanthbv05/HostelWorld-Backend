import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Hostel from './models/Hostel.js';

dotenv.config();

const hostels = [
  {
    name: "JK Star PG & Hostels",
    city: "Vizag",
    description: "Affordable stay in the Midhilapuri Colony",
    rating: 4.5,
    price: 5000,
    image: "https://files.yappe.in/place/full/jk-star-pg-accommodation-3330589.webp",
    reviews: [
      { user: "Amit", comment: "Clean rooms and friendly staff.", rating: 5 },
      { user: "Riya", comment: "Affordable and safe.", rating: 4 }
    ]
  },
  {
    name: "Mint Hostel",
    city: "Vizag",
    description: "Best budget stay in Kommadi",
    rating: 4.0,
    price: 4000,
    image: "https://tse3.mm.bing.net/th?id=OIP.LVb32WtanlCRCm5xpFmiIgHaJ4&pid=Api&P=0&h=180",
    reviews: [
      { user: "Kiran", comment: "Decent place for short stays.", rating: 4 },
      { user: "Swathi", comment: "Friendly staff, small rooms.", rating: 3 }
    ]
  },
  {
    name: "Dwarakamai Boys Hostel",
    city: "Hyderabad",
    description: "Modern stay with luxury facilities",
    rating: 4.7,
    price: 10000,
    image: "https://tse3.mm.bing.net/th?id=OIP.gZ_Yf_cDm_3FbY_zNRjhIAHaE8&pid=Api&P=0&h=180",
    reviews: [
      { user: "Raj", comment: "Super clean and well managed!", rating: 5 }
    ]
  },
  {
    name: "Sri lakshmi heavens pg",
    city: "Bangalore",
    description: "Colive pg for women and men",
    rating: 4.3,
    price: 8000,
    image: "https://tse1.mm.bing.net/th?id=OIP.9smjy7M7yLvtR4RMS3hSrgHaE7&pid=Api&P=0&h=180",
    reviews: [
      { user: "Meena", comment: "Very safe for women. Loved the food!", rating: 4 }
    ]
  },
  {
    name: "Sri satya pg",
    city: "Bangalore",
    description: "PG for working women",
    rating: 3.8,
    price: 6500,
    image: "https://tse1.mm.bing.net/th?id=OIP.MROowMglVqHD0pIKfCctIwHaE7&pid=Api&P=0&h=180",
    reviews: [
      { user: "Divya", comment: "Okay for a short stay.", rating: 3 }
    ]
  },
  {
    name: "Summer PG & Hostels",
    city: "Pune",
    description: "Affordable stay in the puri Colony",
    rating: 4.5,
    price: 5500,
    image: "https://tse4.mm.bing.net/th?id=OIP.pLRwEumZYirnm2370V5c_QHaE8&pid=Api&P=0&h=180",
    reviews: [
      { user: "Ankit", comment: "Clean rooms and friendly staff.", rating: 5 },
      { user: "Priya", comment: "Affordable and safe.", rating: 4 }
    ]
  },
  {
    name: "Prince Hostel",
    city: "Chennai",
    description: "Best budget stay in Guindy",
    rating: 4.0,
    price: 3500,
    image: "https://tse1.mm.bing.net/th?id=OIP.psHGzf1ZX95HCzckb1c6rgHaEq&pid=Api&P=0&h=180",
    reviews: [
      { user: "Keerthana", comment: "Decent place for short stays.", rating: 4 },
      { user: "Sumanth", comment: "Friendly staff, small rooms.", rating: 3 }
    ]
  },
  {
    name: "Sunrise Boys Hostel",
    city: "Mumbai",
    description: "Modern stay with luxury facilities",
    rating: 4.7,
    price: 15000,
    image: "https://tse3.mm.bing.net/th?id=OIP.gZ_Yf_cDm_3FbY_zNRjhIAHaE8&pid=Api&P=0&h=180",
    reviews: [
      { user: "Rakesh", comment: "Super clean and well managed!", rating: 5 }
    ]
  },
  {
    name: "Sri sai ram pg",
    city: "Bangalore",
    description: "Colive pg for women and men",
    rating: 4.3,
    price: 8000,
    image: "https://tse1.mm.bing.net/th?id=OIP.UN86u19B0ngcpoT2bUF_5AHaEc&pid=Api&P=0&h=180",
    reviews: [
      { user: "Madhuri", comment: "Very safe for women. Loved the food!", rating: 4 }
    ]
  },
  {
    name: "Lepakshi pg",
    city: "Delhi",
    description: "PG for working women",
    rating: 3.8,
    price: 6500,
    image: "https://tse1.mm.bing.net/th?id=OIP.YUMchT5tHRu48dI6cKvL0wHaE8&pid=Api&P=0&h=180",
    reviews: [
      { user: "Dharani", comment: "Okay for a short stay.", rating: 3 }
    ]
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Hostel.deleteMany({});
    await Hostel.insertMany(hostels);
    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding database:", err);
  }
}

seedDB();
