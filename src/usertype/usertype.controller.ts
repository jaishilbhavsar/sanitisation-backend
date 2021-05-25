import { UsertypeService } from './usertype.service';
import { Controller, Post, Req, Body, Get } from '@nestjs/common';

@Controller('usertype')
export class UsertypeController {
    constructor(private userTypeService: UsertypeService) {
    }
    @Get('getallusertypes')
    public async getAllUserTypes(): Promise<any> {
        return await this.userTypeService.getAllUserTypes();
    }
}
