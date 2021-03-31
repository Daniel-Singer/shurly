import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: String,
    default: Date.now
  }
});

const URL = mongoose.model('Url', urlSchema);

export default URL;