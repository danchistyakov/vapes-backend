import { Controller, Request, HttpStatus, Res, Headers, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Get("products")
  getGoods(@Request() req, @Res() res, @Headers() headers): any[] {
    const data = this.productsService.getGoods();
    return res.status(HttpStatus.OK).json({ data, statusCode: HttpStatus.OK, success: true });
  }

  @Get("product/:id")
  getGood(@Request() req, @Res() res, @Headers() headers): any {
    const { id } = req.params;
    const data = this.productsService.getGood(id);
    return res.status(HttpStatus.OK).json({ data, statusCode: HttpStatus.OK, success: true });
  }
}
