import { Document } from 'mongoose';
export interface Product extends Document {
    IdProduct: number;
    NameProduct: string;
    Category: string;
    Description: string;
    ProductQuantity: number;
    Status: Boolean;
}
