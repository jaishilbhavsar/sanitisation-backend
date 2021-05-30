import { ADDRESSModal } from './../modal/address.modal';
import { Body, Controller, Get, Post, Req, Param } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) {

    }
    @Get('getAddressByUserID/:UserId')
    public async getAddressByUserID(@Param('UserId') UserId ): Promise<ADDRESSModal> {
        return await this.addressService.getAddressByUserID(UserId);
    }
    @Post('InsertAddress')
    public async InsertAddress(@Req() req, @Body() data: ADDRESSModal): Promise<any> {
        return await this.addressService.InsertAddress(data);
    }
}
