"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    NameProduct: String,
    Category: String,
    Description: String,
    ProductQuantity: Number,
    Status: Boolean
});
//# sourceMappingURL=product.schema.js.map