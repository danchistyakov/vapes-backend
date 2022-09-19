import { Controller, Res, HttpStatus, Post, Body } from "@nestjs/common";
import { BotService } from "./bot.service";
import { SendMessageDTO } from "./bot.dto";

@Controller()

export class BotController {

  constructor(private botService: BotService) {
  }

  @Post("/sendMessage")
  async sendMessage(@Res() res, @Body() payload: SendMessageDTO) {
    await this.botService.sendMessage(payload);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      success: true
    });
  }
}
