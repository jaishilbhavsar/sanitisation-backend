import { ADDRESSModal } from './../modal/address.modal';
import { Body, Controller, Get, Post, Req, Param, Delete } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) {

    }
    @Get('getAddressByUserID/:UserId')
    public async getAddressByUserID(@Param('UserId') UserId): Promise<ADDRESSModal> {
        return await this.addressService.getAddressByUserID(UserId);
    }
    @Post('InsertAddress')
    public async InsertAddress(@Req() req, @Body() data: ADDRESSModal): Promise<any> {
        return await this.addressService.InsertAddress(data);
    }
    @Post('EditAddress')
    public async EditAddress(@Req() req, @Body() data: ADDRESSModal): Promise<any> {
        return await this.addressService.EditAddress(data);
    }
    @Delete('deleteAddress/:id')
    public async deleteAppointment(@Req() req, @Param('id') id: Number): Promise<any> {
        return await this.addressService.deleteAddress(id);
    }
}
