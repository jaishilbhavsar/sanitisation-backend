import { ChargesService } from './../charges/charges.service';
import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';

@Module({
  providers: [AppointmentService, ChargesService],
  controllers: [AppointmentController]
})
export class AppointmentModule { }
