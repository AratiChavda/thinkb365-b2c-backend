import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('offers')
@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  findAll() {
    return this.offersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.offersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() offerData: any) {
    return this.offersService.create(offerData);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.offersService.delete(id);
  }
}
