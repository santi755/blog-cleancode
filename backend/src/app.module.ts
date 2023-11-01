import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PersonalDashboardModule } from './personal-dashboard/personal-dashboard.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BlogModule,
    PersonalDashboardModule,
    /*
      TODO: Change this to a .env variable
      TODO: Move this to a DATABASE config file
    */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db-blog-cleancode',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
