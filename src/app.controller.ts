import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Record, Demo, Output } from './classes/classes';

@Controller('json')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getJson(@Body() records: Record[] ): Output {
    return this.appService.getJson(records);
  }
}
