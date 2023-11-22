import { Body, Controller, Post } from '@nestjs/common';
import { BotService } from './app.service';

@Controller()
export class AppController {
  constructor(private botService: BotService) {}

  @Post()
  async getMessage(@Body() body: any): Promise<number> {
    // this.botService.sendMessage(body.from);
    await this.botService.sendSwiftchatMessage(body.from);
    console.log(body);
    if (body.button_response.body === 'Mathematics, Class 1') {
      await this.botService.sendMessage(body.from);
    }
    return 0;
  }
}
