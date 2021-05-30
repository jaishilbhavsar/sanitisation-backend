import { FAQModal } from './../modal/faq.modal';
import { EntityManager, getManager } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class FaqService {
    public tableName = "FAQ";
    constructor(private manager: EntityManager) {
        this.manager = getManager();
    }
    public async getAllFaq(): Promise<FAQModal> {
        let sql = "select * from " + this.tableName + ";"
        console.log(sql);
        return await this.manager.query(sql);
    }
    public async getAllActiveFaq(): Promise<FAQModal> {
        try {
            let sql = "select * from " + this.tableName + " where isActive=1 " + ";"
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
