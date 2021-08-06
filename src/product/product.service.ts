import { INVOICEModal } from './../modal/invoice.modal';
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
            let sql = "SELECT * FROM " + this.tableName + " p JOIN CATEGORY c ON p.categoryID=c.categoryID where p.productID=" + data + "; ";
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    public async PlaceOrder(data: INVOICEModal): Promise<PRODUCTModal> {
        try {
            let product = await this.getAllProductsByProductId(data.productID);
            let amount = Number(product[0].price) * Number(data.quantity);
            let date = new Date().toISOString().split("T")[0];
            let sql = "INSERT INTO INVOICE (userID,productID,addressID,quantity,totalAmount,invoicedate,status) VALUES(" + data.userID + "," + data.productID + "," + data.addressID + "," + data.quantity + "," + amount + ",'" + date + "','pending')";
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    public async getAllInvoicesByUserID(id: Number): Promise<any> {
        let sql = "SELECT * FROM INVOICE i JOIN PRODUCT p ON i.productID=p.productID JOIN ADDRESS a ON i.addressID=a.addressID JOIN CATEGORY c ON p.categoryID=c.categoryID WHERE i.userID=" + id + ";"
        console.log(sql);
        return await this.manager.query(sql);
    }
    public async deleteOrder(id: Number): Promise<any> {
        let sql = "DELETE FROM INVOICE where invoiceID=" + id + ";"
        console.log(sql);
        return await this.manager.query(sql);
    }
}
