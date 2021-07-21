import { USERModal } from './../modal/user.modal';
import { EntityManager, getManager } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    public tableName = "USER";
    constructor(private manager: EntityManager) {
        this.manager = getManager();
    }
    public async login(data: USERModal): Promise<USERModal> {
        try {
            let sql = "select * from " + this.tableName + " where email='" + data.email + "' AND password='" + data.password + "';"
            let result = null;
            let response = await this.manager.query(sql);
            if (response.length > 0) {
                result = { isSuccess: 1, message: "success", data: response };
            }
            else {
                result = { isSuccess: 0, message: "Invalid Email/Password." }
            }
            return result;
        }
        catch (er) {
            throw new HttpException(er.sqlMessage, HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
    public async signUp(data: USERModal): Promise<any> {
        try {
            let sql = "INSERT INTO " + this.tableName + "(userName,email,password,isActive,userTypeID) VALUES('" + data.userName + "','" + data.email + "','" + data.password + "'," + data.isActive + "," + data.userTypeID + ")";
            console.log(sql);
            let result = await this.manager.query(sql);
            return result;
        }
        catch (er) {
            throw new HttpException(er.sqlMessage, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
