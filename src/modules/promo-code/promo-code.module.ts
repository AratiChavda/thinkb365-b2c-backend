import { Module } from '@nestjs/common';
import { PromoCodeController } from './promo-code.controller';
import { PromoCodeService } from './promo-code.service';

@Module({
  controllers: [PromoCodeController],
  providers: [PromoCodeService],
})
export class PromoCodeModule {}
