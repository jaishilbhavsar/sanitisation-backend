import { ADDRESSModal } from './../modal/address.modal';
import { EntityManager, getManager } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
    public tableName = "ADDRESS";
    constructor(private manager: EntityManager) {
        this.manager = getManager();
    }
    public async getAddressByUserID(data: Number): Promise<ADDRESSModal> {
        let sql = "select * from " + this.tableName + " where userID= " + data +  ";"
        console.log(sql);
        return await this.manager.query(sql);
    }
    public async InsertAddress(data: ADDRESSModal): Promise<any> {
        try {
            let sql = "INSERT INTO " + this.tableName + "(addressLine,city,provience,postalCode) VALUES('" + data.addressLine + "','" + data.city + "','" + data.provience + "'," + data.postalCode + ")";
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
