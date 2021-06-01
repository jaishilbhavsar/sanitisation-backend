import { Module } from '@nestjs/common';
import { UsercartService } from './usercart.service';
import { UsercartController } from './usercart.controller';

@Module({
  providers: [UsercartService],
  controllers: [UsercartController]
})
export class UsercartModule {}
