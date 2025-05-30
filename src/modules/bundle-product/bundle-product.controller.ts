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
import { BundleProductService } from './bundle-product.service';

@ApiTags('bundle-product')
@Controller('bundle-product')
export class BundleProductController {
  constructor(private readonly bundleProductService: BundleProductService) {}

  @Get()
  findAll() {
    return this.bundleProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bundleProductService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() offerData: any) {
    return this.bundleProductService.create(offerData);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.bundleProductService.delete(id);
  }
}
