import { Module } from '@nestjs/common';
import { BundleController } from './bundle.controller';
import { BundleService } from './bundle.service';

@Module({
  providers: [BundleService],
  controllers: [BundleController],
})
export class BundleModule {}
