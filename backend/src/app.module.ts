import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PersonalDashboardModule } from './personal-dashboard/personal-dashboard.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogModule,
    PersonalDashboardModule,
    /*
      TODO: Check some way (Best practices) to access the environment variables
      TODO: Move this to a DATABASE config filee
    */
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [path.join(__dirname, '**', '*.entity{.ts,.js}')],
        synchronize: true,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
