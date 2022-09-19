import { Update, Ctx, Start, Hears, InjectBot } from 'nestjs-telegraf';
import { TelegrafContext } from './bot.interface';
import { Telegraf } from 'telegraf';
import { BotService } from './bot.service';

@Update()
export class BotUpdate {
  constructor(
    @InjectBot()
    private readonly bot: Telegraf<TelegrafContext>,
    private readonly botService: BotService,
  ) {
  }

  @Start()
  async start(@Ctx() ctx: TelegrafContext) {
    await ctx.reply('Привет! Это HeySatoshi bot, он будет присылать тебе сигналы по арбитражу в данный чат!\n\nДля верификации аккаунта, укажите почту, которая была использована при регистрации на сайте.');
  }
}
