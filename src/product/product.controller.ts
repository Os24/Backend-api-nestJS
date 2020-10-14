import { Controller,Post,Get,Put,Delete,HttpStatus,Res, Body, Param, NotFoundException, Query } from '@nestjs/common';
import {CreateProductDTO} from './dto/product.dto'
import { ProductService } from "./product.service";
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}
    @Post('/create')
   async createPost(@Res() response, @Body() createProductDTO: CreateProductDTO){
        const product  = await this.productService.createProduct(createProductDTO)
        return response.status(HttpStatus.OK).json({
            message:'Product succesfully created',
            product:product
        })
}
    @Get('/')
     async getProducts(@Res() response){
         const products =  await this.productService.getProducts() 
         return response.status(HttpStatus.OK).json({
             products
         })
        }

     @Get('/:productId')
     async getProduct(@Res() response, @Param('productId') productId){
         const product = await this.productService.getProduct(productId)
         if (!product) throw new NotFoundException("Not found")
         return  response.status(HttpStatus.OK).json(product)
     }   
     @Delete('/delete')
     async deleteProduct(@Res() response, @Query('productID') productID ){
         const deletedProduct = await this.productService.deleteProduct(productID)
         if (!deletedProduct) throw new NotFoundException("Not found and not deleted");
         return response.status(HttpStatus.OK).json({
             message:'Product deleted',
             deletedProduct
         })
     }
     @Put('/update')
     async updateProduct(@Res() response, @Body() createproductDTO:CreateProductDTO, @Query('productID') productID ){
         const updatedProduct = await this.productService.updateProduct(productID,createproductDTO)
         if (!updatedProduct) throw new NotFoundException("Not found and not deleted");
         return response.status(HttpStatus.OK).json({
             message:'Product updated',
             updatedProduct
         })
     }

}