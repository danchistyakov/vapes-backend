import { Module } from "@nestjs/common";
import { TelegrafModule } from "nestjs-telegraf";
import { BotUpdate } from "./bot.update";
import { BotService } from "./bot.service";
import { BotController } from "./bot.controller";

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: () => ({ token: process.env.BOT_TOKEN })
    })
  ],
  controllers: [BotController],
  providers: [BotService, BotUpdate]
})
export class BotModule {
}
