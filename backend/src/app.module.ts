import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PersonalDashboardModule } from './dashboard/personal-dashboard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '../config/typeOrmConfig.service';
import { TypeOrmConfigModule } from '../config/typeOrmconfig.module';

@Module({
  imports: [
    BlogModule,
    PersonalDashboardModule,
    TypeOrmModule.forRootAsync({
      imports: [TypeOrmConfigModule],
      useExisting: TypeOrmConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
