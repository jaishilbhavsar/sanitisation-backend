import { CHARGESModal } from './../modal/charges.modal';
import { Injectable } from '@nestjs/common';
import { EntityManager, getManager } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
@Injectable()
export class ChargesService {
    public tableName = "CHARGES";
    constructor(private manager: EntityManager) {
        this.manager = getManager();
    }
    public async getAllCharges(): Promise<CHARGESModal> {
        let sql = "select * from " + this.tableName;
        console.log(sql);
        return await this.manager.query(sql);
    }
}
