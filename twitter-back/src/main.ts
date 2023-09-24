import * as fs from "fs";
import { createCA, createCert } from "mkcert";
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common";

import { AppModule } from './app.module';



async function bootstrap() {
  const ca = await createCA({
    organization: "Naran",
    countryCode: "BR",
    state: "Parana",
    locality: "Curitiba",
    validity: 365
  });

  const cert = await createCert({
    ca: { key: ca.key, cert: ca.cert },
    domains: ["127.0.0.1", "localhost"],
    validity: 365
  });

  const httpsOptions = {
    key: cert.key,
    cert: cert.cert
  }

  const app = await NestFactory.create(AppModule, {httpsOptions} );
  app.enableCors({origin: 'http://localhost:4200'});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
