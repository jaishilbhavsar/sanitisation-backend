import { TypeOrmModule } from '@nestjs/typeorm';
require('dotenv').config();
export const databaseConnections = [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forRoot({
        name: 'demo',
        type: 'mysql',
        logging: true,
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
        username: String(process.env.DB_USER),
        password: String(process.env.DB_PASSWORD),
        database: String(process.env.DB_NAME),
    })
];
