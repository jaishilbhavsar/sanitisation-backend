import { ChargesService } from './../charges/charges.service';
import { APPOINTMENTModal } from './../modal/appointment.modal';
import { EntityManager, getManager } from 'typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppointmentService {
    public tableName = "APPOINTMENT";
    constructor(private manager: EntityManager, public chargesService: ChargesService) {
        this.manager = getManager();
    }

    public async bookAppointment(data: APPOINTMENTModal): Promise<any> {
        try {
            let result;
            let amount = 0;
            let status = "pending";
            let res = await this.chargesService.getAllCharges();
            if (res) {
                amount = (Number(res[0].perRoomCharge) * Number(data.noOfRooms)) + Number(res[0].baseCharge);
                let sql = "INSERT INTO " + this.tableName + "(userID,addressID,appoitmentDate,noOfRooms,amount,status) VALUES(" + data.userID + "," + data.addressID + ",'" + data.appoitmentDate + "'," + data.noOfRooms + "," + amount + ",'" + status + "')";
                console.log(sql);
                result = await this.manager.query(sql);
            }
            return result;
        }
        catch (er) {
            throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
