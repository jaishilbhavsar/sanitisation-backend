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
        let sql = "select * from " + this.tableName + " where userID= " + data + ";"
        console.log(sql);
        return await this.manager.query(sql);
    }
    public async InsertAddress(data: ADDRESSModal): Promise<any> {
        try {
            let sql = "INSERT INTO " + this.tableName + "(userID,addressLine,city,provience,postalCode) VALUES(" + data.userID + ",'" + data.addressLine + "','" + data.city + "','" + data.provience + "','" + data.postalCode + "')";
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    public async EditAddress(data: ADDRESSModal): Promise<any> {
        try {
            let sql = "UPDATE " + this.tableName + " SET addressLine='" + data.addressLine + "',city='" + data.city + "',provience='" + data.provience + "',postalCode='" + data.postalCode + "' WHERE addressID=" + data.addressID + ";";
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    public async deleteAddress(id: Number): Promise<any> {
        try {
            let result;
            let sql = "DELETE FROM " + this.tableName + " WHERE addressID=" + id;
            console.log(sql);
            result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            if (er.errno == 1451) {
                throw new HttpException("Address is being used for appointment/order. Cannot delete address while in use.", HttpStatus.INTERNAL_SERVER_ERROR)
            }
            else {
                throw new HttpException(er.sqlMessage, HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
    }
}
