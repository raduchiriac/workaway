/**
 * Schema Definitions
 *
 */
import mongoose from 'mongoose';

const WorksSchema = new mongoose.Schema({
  wid: String,
  title: String,
  img: String,
  link: String,
  archived: Number,
  fav: Number,
  insertion_date: { type: Date, default: Date.now }
});

export default mongoose.model('Works', WorksSchema);
