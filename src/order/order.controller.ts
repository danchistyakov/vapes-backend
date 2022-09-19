import { Controller, Request, Post, Body, HttpStatus, Res, Headers, Get } from "@nestjs/common";
import { OrderService } from "./order.service";

@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {
  }

  @Get(":id")
  getOrder(@Request() req, @Res() res, @Headers() headers): any {
    const { id } = req.params;
    const data = this.orderService.getOrder(id);
    return res.status(HttpStatus.OK).json({ data, statusCode: HttpStatus.OK, success: true });
  }

  @Post("")
  createOrder(@Res() res, @Request() req, @Body() payload) {
    return this.orderService.createOrder(payload);
  }
}
