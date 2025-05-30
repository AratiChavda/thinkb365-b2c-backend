import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PromoCodeService } from './promo-code.service';

@ApiTags('Promo Code')
@Controller('promo-code')
export class PromoCodeController {
  constructor(private readonly promoCodeService: PromoCodeService) {}

  @Get()
  findAll() {
    return this.promoCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.promoCodeService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() offerData: any) {
    return this.promoCodeService.create(offerData);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.promoCodeService.delete(id);
  }
}
