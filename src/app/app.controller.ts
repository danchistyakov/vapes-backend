import { Controller, Request, HttpStatus, Res, Post, Body, Get, Headers } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get("status")
  checkAvailability(@Request() req, @Res() res, @Headers() headers): any {
    const data = this.appService.checkAvailability();
    return res.status(HttpStatus.OK).json({ data, statusCode: HttpStatus.OK, success: true });
  }

  @Post("version")
  checkVersion(@Res() res, @Request() req, @Body() payload): any[] {
    const { version } = payload;
    const data = this.appService.checkVersion(version);
    return res.status(HttpStatus.OK).json({ data, statusCode: HttpStatus.OK, success: true });
  }
}
