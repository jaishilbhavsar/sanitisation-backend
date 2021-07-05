import { INVOICEModal } from './../modal/invoice.modal';
import { Body, Controller, Get, Req,Post,Param } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
    constructor(private invoiceService: InvoiceService) {

    }
    @Get('getAllInvoices')
    public async getAllInvoices(): Promise<INVOICEModal> {
        return await this.invoiceService.getAllInvoices();
    }
    @Get('getAllInvoicesByUserId/:UserId')
    public async getAllInvoicesByUserId(@Param('UserId') UserId): Promise<INVOICEModal> {
        return await this.invoiceService.getAllInvoicesByUserId(UserId);
    }
    @Post('insert')
    public async insert(@Req() req, @Body() data: INVOICEModal): Promise<any> {
        return await this.invoiceService.insert(data);
    }
}