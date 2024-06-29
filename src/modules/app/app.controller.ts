import { Controller, Get, Logger, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ITableParams, TableParams } from 'src/common/decorators/table-params.decorator';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @Get('users')
  async rootNoParams(@TableParams() tableParams: ITableParams) {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return this.appService.getTableWithLayout(tableParams);
  }
}
