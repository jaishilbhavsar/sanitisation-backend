import { PRODUCTModal } from './../modal/product.modal';
import { EntityManager, getManager } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    public tableName = "PRODUCT";
    constructor(private manager: EntityManager) {
        this.manager = getManager();
    }
    public async getAllProducts(): Promise<PRODUCTModal> {
        let sql = "SELECT * FROM " + this.tableName + " p JOIN CATEGORY c ON p.categoryID=c.categoryID;"
        console.log(sql);
        return await this.manager.query(sql);
    }
    public async getAllProductsByProductId(data: Number): Promise<PRODUCTModal> {
        try {
            let sql = "select * from " + this.tableName + " where productID= " + data + ";"
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
