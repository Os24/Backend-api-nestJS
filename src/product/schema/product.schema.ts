import * as mongoose from 'mongoose';

 export const ProductSchema = new mongoose.Schema({
    NameProduct: String,
    Category : String,
    Description : String,
    ProductQuantity : Number,
    Status : Boolean
  });