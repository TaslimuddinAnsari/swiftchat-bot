import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BotService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [BotService],
})
export class AppModule {}
