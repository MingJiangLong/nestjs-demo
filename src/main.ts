import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new ValidationPipe({
    whitelist: true, // 超出dto的字段将会被忽略掉
    // forbidNonWhitelisted: true,// 字段不在dto内将会报错
    // transform: true// createCoffeeDto  instanceof CreateCoffeeDto  true
  }))
  await app.listen(3000);
}
bootstrap();
