import { Module } from '@nestjs/common';
import { UsertypeService } from './usertype.service';
import { UsertypeController } from './usertype.controller';

@Module({
  providers: [UsertypeService],
  controllers: [UsertypeController]
})
export class UsertypeModule {}
