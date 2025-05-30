import { Module } from '@nestjs/common';
import { BundleProductService } from './bundle-product.service';
import { BundleProductController } from './bundle-product.controller';

@Module({
  providers: [BundleProductService],
  controllers: [BundleProductController],
})
export class BundleProductModule {}
