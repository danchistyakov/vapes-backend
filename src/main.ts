import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.setGlobalPrefix("api");
  app.enableCors({
    credentials: true,
    origin: [
      "http://localhost:3000"
    ]
  });
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle("Vapes API")
    .setDescription("Vapes API documentation")
    .setVersion("0.0.1")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api/doc", app, document);
  await app.listen(process.env.PORT || 5000);
}

bootstrap();
