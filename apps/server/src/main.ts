/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('configurator API')
    .setDescription('The configurator API description')
    .setVersion('1.0')
    .addTag('configurator')
    .build();
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:4200',
  });
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
