import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { UsertypeModule } from './usertype/usertype.module';
import { AddressModule } from './address/address.module';
import { AppointmentModule } from './appointment/appointment.module';
import { CategoryModule } from './category/category.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModule } from './product/product.module';
import { UsercartModule } from './usercart/usercart.module';
import { FaqModule } from './faq/faq.module';

@Module({
  imports: [DatabaseModule, UserModule, UsertypeModule, AddressModule, AppointmentModule, CategoryModule, InvoiceModule, ProductModule, UsercartModule, FaqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
