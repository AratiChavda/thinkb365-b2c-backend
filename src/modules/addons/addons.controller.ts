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
import { AddonsService } from './addons.service';

@ApiTags('addons')
@Controller('addons')
export class AddonsController {
  constructor(private readonly addonsService: AddonsService) {}

  @Get()
  findAll() {
    return this.addonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.addonsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post()
  create(@Body() addonData: any) {
    return this.addonsService.create(addonData);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.addonsService.delete(id);
  }
}
