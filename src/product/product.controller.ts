import { INVOICEModal } from './../modal/invoice.modal';
import { PRODUCTModal } from './../modal/product.modal';
import { Body, Controller, Get, Req, Param, Post, Delete } from '@nestjs/common';
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
    public async getAllProductsByProductId(@Param('ProductID') ProductID): Promise<PRODUCTModal> {
        return await this.productService.getAllProductsByProductId(ProductID);
    }
    @Get('getAllInvoicesByUserID/:invoiceID')
    public async getAllInvoicesByUserID(@Param('invoiceID') invoiceID): Promise<PRODUCTModal> {
        return await this.productService.getAllInvoicesByUserID(invoiceID);
    }
    @Post('placeOrder')
    public async editAppointment(@Req() req, @Body() data: INVOICEModal): Promise<any> {
        return await this.productService.PlaceOrder(data);
    }
    @Delete('deleteOrder/:id')
    public async deleteAppointment(@Req() req, @Param('id') id: Number): Promise<any> {
        return await this.productService.deleteOrder(id);
    }
}
