import { Module } from "@nestjs/common";
import { AppModule } from "./app/app.module";
import { BotModule } from "./bot/bot.module";
import { ProductsModule } from "./products/products.module";
import { OrderModule } from "./order/order.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI, { useNewUrlParser: true }),
    AppModule,
    //BotModule,
    OrderModule,
    ProductsModule,
  ],
})
export class MainModule {
}
