import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from 'cors';

const app = express();

// ✅ Enable CORS for your frontend domain only
app.use(cors({
  origin: 'https://mern-book-store-ui.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ API Routes
app.use('/books', booksRoutes);

// ✅ Test route
app.get('/', (req, res) => {
  return res.status(200).send("hi");
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MongoDBURI)
  .then(() => {
    console.log("Mongodb Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
