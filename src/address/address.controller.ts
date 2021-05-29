import { ADDRESSModal } from './../modal/address.modal';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) {

    }
    @Get('getAddressByUserID')
    public async getAddressByUserID(@Req() req, @Body() data: ADDRESSModal): Promise<ADDRESSModal> {
        return await this.addressService.getAddressByUserID(data);
    }
    @Post('InsertAddress')
    public async InsertAddress(@Req() req, @Body() data: ADDRESSModal): Promise<any> {
        return await this.addressService.InsertAddress(data);
    }
}
