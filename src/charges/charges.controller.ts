import { CHARGESModal } from './../modal/charges.modal';
import { Controller, Get } from '@nestjs/common';
import { ChargesService } from './charges.service';

@Controller('charges')
export class ChargesController {
    constructor(private chargesService: ChargesService) {

    }
    @Get('getAllCharges')
    public async getAllCharges(): Promise<CHARGESModal> {
        return await this.chargesService.getAllCharges();
    }
}
