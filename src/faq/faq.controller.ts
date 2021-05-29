import { FAQModal } from './../modal/faq.modal';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FaqService } from './faq.service';

@Controller('faq')
export class FaqController {
    constructor(private faqService: FaqService) {

    }
    @Get('getAllFaq')
    public async getAllFaq(@Req() req, @Body() data: FAQModal): Promise<FAQModal> {
        return await this.faqService.getAllFaq(data);
    }
    @Get('getAllActiveFaq')
    public async getAllActiveFaq(@Req() req, @Body() data: FAQModal): Promise<any> {
        return await this.faqService.getAllActiveFaq(data);
    }
}
