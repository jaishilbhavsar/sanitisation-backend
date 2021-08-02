import { EntityManager, getManager } from 'typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private manager: EntityManager) {
    this.manager = getManager();
  }
  getHello(): any {
    try {
      return this.manager.query('SELECT * FROM USER;');
    }
    catch (er) {
      throw new HttpException("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
