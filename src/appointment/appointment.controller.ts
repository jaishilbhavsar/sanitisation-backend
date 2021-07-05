import { AppointmentService } from './appointment.service';
import { APPOINTMENTModal } from './../modal/appointment.modal';
import { Controller, Post, Req, Body } from '@nestjs/common';

@Controller('appointment')
export class AppointmentController {
    constructor(private appointmentService: AppointmentService) {

    }
    @Post('bookappointment')
    public async bookAppointment(@Req() req, @Body() data: APPOINTMENTModal): Promise<any> {
        return await this.appointmentService.bookAppointment(data);
    }
}
