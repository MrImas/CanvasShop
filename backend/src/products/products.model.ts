import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  size: { type: String, required: true },
  image: { type: String, required: true },
});

export const ProductModel = mongoose.model('product', ProductSchema);
