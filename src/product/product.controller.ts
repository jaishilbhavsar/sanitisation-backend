import { PRODUCTModal } from './../modal/product.modal';
import { Body, Controller, Get, Req,Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) {

    }
    @Get('getAllProducts')
    public async getAllProduct(): Promise<PRODUCTModal> {
        return await this.productService.getAllProducts();
    }
    @Get('getAllProductsByProductId/:ProductID')
    public async getAllProductsByProductId(@Param('ProductID') ProductID ): Promise<PRODUCTModal> {
        return await this.productService.getAllProductsByProductId(ProductID);
    }
}
