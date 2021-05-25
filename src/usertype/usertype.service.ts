import { EntityManager, getManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsertypeService {
    constructor(private manager: EntityManager) {
        this.manager = getManager();
    }
    tableName = "USERTYPE";


    public async getAllUserTypes(): Promise<any> {
        let sql = "select * from " + this.tableName + ";";
        console.log(sql);
        return await this.manager.query(sql);
    }
}
