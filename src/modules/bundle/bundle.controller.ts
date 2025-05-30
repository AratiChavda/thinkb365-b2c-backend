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
import { BundleService } from './bundle.service';

@ApiTags('bundle')
@Controller('bundle')
export class BundleController {
  constructor(private readonly bundleService: BundleService) {}

  @Get()
  findAll() {
    return this.bundleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bundleService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() offerData: any) {
    return this.bundleService.create(offerData);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.bundleService.delete(id);
  }
}
