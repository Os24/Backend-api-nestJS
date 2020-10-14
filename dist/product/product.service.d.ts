import { Model } from "mongoose";
import { Product } from "./interface/product.interface";
import { CreateProductDTO } from "./dto/product.dto";
export declare class ProductService {
    readonly ProductModel: Model<Product>;
    constructor(ProductModel: Model<Product>);
    getProducts(): Promise<Product[]>;
    getProduct(productID: number): Promise<Product>;
    createProduct(createProductDTO: CreateProductDTO): Promise<Product>;
    deleteProduct(productID: number): Promise<Product>;
    updateProduct(productID: number, createProductDTO: CreateProductDTO): Promise<Product>;
}
