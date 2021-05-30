import { FAQModal } from './../modal/faq.modal';
import { Body, Controller, Get, Req } from '@nestjs/common';
import { FaqService } from './faq.service';

@Controller('faq')
export class FaqController {
    constructor(private faqService: FaqService) {

    }
    @Get('getAllFaq')
    public async getAllFaq(): Promise<FAQModal> {
        return await this.faqService.getAllFaq();
    }
    @Get('getAllActiveFaq')
    public async getAllActiveFaq(): Promise<FAQModal> {
        return await this.faqService.getAllActiveFaq();
    }
}
