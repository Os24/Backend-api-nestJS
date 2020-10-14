import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from "./product.service";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    createPost(response: any, createProductDTO: CreateProductDTO): Promise<any>;
    getProducts(response: any): Promise<any>;
    getProduct(response: any, productId: any): Promise<any>;
    deleteProduct(response: any, productID: any): Promise<any>;
    updateProduct(response: any, createproductDTO: CreateProductDTO, productID: any): Promise<any>;
}
