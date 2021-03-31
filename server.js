import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import index from './routes/index.js';
import url from './routes/url.js';

const app = express();

dotenv.config();

connectDB();

app.use(express.json({ extended: false }));
app.use('/', index);
app.use('/api/url', url);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server running on ${PORT}`)})