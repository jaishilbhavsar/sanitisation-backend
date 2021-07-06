import { appointmentAddressModal } from './../modal/appointmentAddress.modal';
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
    public async getAllApponitmentsByUserId(data: Number): Promise<appointmentAddressModal[]> {
        let sql = "SELECT * FROM APPOINTMENT ap JOIN ADDRESS ad ON ap.addressID=ad.addressID WHERE ap.userID=" + data + ";"
        let res = await this.manager.query(sql);
        let myAppointments = new Array<appointmentAddressModal>();
        await res.map((data) => {
            let appointment = new appointmentAddressModal();
            appointment.appointmentID = data.appointmentID;
            appointment.userID = data.userID;
            appointment.addressID = data.addressID;
            appointment.appoitmentDate = data.appoitmentDate;
            appointment.noOfRooms = data.noOfRooms;
            appointment.amount = data.amount;
            appointment.status = data.status;
            appointment.addressLine = data.addressLine;
            appointment.city = data.city;
            appointment.provience = data.provience;
            appointment.postalCode = data.postalCode;
            myAppointments.push(appointment);
        });
        return myAppointments;
    }
}
