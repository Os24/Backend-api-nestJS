import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interface/product.interface";
import { CreateProductDTO } from "./dto/product.dto";


@Injectable()
export class ProductService {
   constructor(@InjectModel('Product')readonly ProductModel:Model<Product>){}

    async getProducts():Promise<Product[]>{
        const products = await this.ProductModel.find()
        return products;

    }
    async getProduct(productID:number):Promise<Product>{
        const product = await this.ProductModel.findById(productID);
        return product;
    }

    async createProduct(createProductDTO:CreateProductDTO):Promise<Product>{
        const product = await new this.ProductModel(createProductDTO);
        return await product.save();
    }

    async deleteProduct(productID:number):Promise<Product>{
       const deletedproduct = await this.ProductModel.findByIdAndDelete(productID)
        return deletedproduct;
    }

    async updateProduct(productID:number,createProductDTO:CreateProductDTO):Promise<Product>{    
        const updatedProduct = await this.ProductModel.findByIdAndUpdate(productID,createProductDTO,{new:true})
        return updatedProduct
    }
}
