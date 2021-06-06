import { INVOICEModal } from './../modal/invoice.modal';
import { EntityManager, getManager } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class InvoiceService {
    public tableName = "INVOICE";
    constructor(private manager: EntityManager) {
        this.manager = getManager();
    }
    public async getAllInvoices(): Promise<INVOICEModal> {
        let sql = "select * from " + this.tableName + ";"
        console.log(sql);
        return await this.manager.query(sql);
    }
    public async getAllInvoicesByUserId(data: Number): Promise<INVOICEModal> {
        try {
            let sql = "select * from " + this.tableName + " where userID= " + data +  ";"
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    public async insert(data: INVOICEModal): Promise<any> {
        try {
            let sql = "INSERT INTO " + this.tableName + "(userID,productID,quantity,totalAmount,invoicedate,status,deliveredDate) VALUES(" + data.userID + "," + data.productID + "," + data.quantity + "," + data.totalAmount + ",'" + data.invoicedate + "','" + data.status + "','" + data.deliveredDate + "')";
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            console.log(er);
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
  }
}
