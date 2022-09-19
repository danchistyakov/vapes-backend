import { IsInt } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class SendMessageDTO {
  @ApiProperty()
  @IsInt()
  chatId: number;

  @ApiProperty()
  data: string;
}