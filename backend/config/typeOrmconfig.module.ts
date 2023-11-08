import { Module } from '@nestjs/common';
import { TypeOrmConfigService } from './typeOrmConfig.service';

@Module({
  providers: [TypeOrmConfigService],
  exports: [TypeOrmConfigService],
})
export class TypeOrmConfigModule {}
