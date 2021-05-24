import { EntityManager, getManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private manager: EntityManager) {
    this.manager = getManager();
  }
  getHello(): any {
    return this.manager.query('SELECT * FROM teachers;');
  }
}
