import * as fs from "fs";
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common";

import { AppModule } from './app.module';

const httpsOptions = {
  key: fs.readFileSync('secrets/ca.key'),
  cert: fs.readFileSync('secrets/ca.crt'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {httpsOptions});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
