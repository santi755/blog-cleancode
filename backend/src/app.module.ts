import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PersonalDashboardModule } from './personal-dashboard/personal-dashboard.module';

@Module({
  imports: [BlogModule, PersonalDashboardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
