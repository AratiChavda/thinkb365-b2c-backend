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
import { BrandService } from './brand.service';

@ApiTags('brand')
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Get()
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.brandService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() brandData: any) {
    return this.brandService.create(brandData);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.brandService.delete(id);
  }
}
