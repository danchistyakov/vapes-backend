import {Injectable} from '@nestjs/common';
import {InjectBot} from 'nestjs-telegraf';
import {Telegraf} from 'telegraf';
import {TelegrafContext} from './bot.interface';
import {SendMessageDTO} from './bot.dto';

@Injectable()
export class BotService {

    constructor(
        @InjectBot()
        private readonly bot: Telegraf<TelegrafContext>,
    ) {
    }

    async sendMessage(payload: SendMessageDTO): Promise<void> {
        try {
            await this.bot.telegram.sendMessage(payload.chatId, payload.data, {parse_mode: 'HTML'});
        } catch (e) {
        }
    }


}
