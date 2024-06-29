import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppTemplates } from './app.templates';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppTemplates],
})
export class AppModule {}
