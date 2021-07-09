import { appointmentAddressModal } from './../modal/appointmentAddress.modal';
import { AppointmentService } from './appointment.service';
import { APPOINTMENTModal } from './../modal/appointment.modal';
import { Controller, Post, Req, Body, Get, Param } from '@nestjs/common';

@Controller('appointment')
export class AppointmentController {
    constructor(private appointmentService: AppointmentService) {

    }
    @Post('bookappointment')
    public async bookAppointment(@Req() req, @Body() data: APPOINTMENTModal): Promise<any> {
        return await this.appointmentService.bookAppointment(data);
    }
    @Post('editappointment')
    public async editAppointment(@Req() req, @Body() data: APPOINTMENTModal): Promise<any> {
        return await this.appointmentService.editAppointment(data);
    }
    @Get('getAllUserAppointments/:UserId')
    public async getAllApponitmentsByUserId(@Param('UserId') UserId): Promise<appointmentAddressModal[]> {
        return await this.appointmentService.getAllApponitmentsByUserId(UserId);
    }
}
