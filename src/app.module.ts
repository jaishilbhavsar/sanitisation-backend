import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { UsertypeModule } from './usertype/usertype.module';

@Module({
  imports: [DatabaseModule, UserModule, UsertypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
