import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './modules/app/app.module';
import { IoniconsProps } from './ionicons';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "ion-icon": HtmlTag & IoniconsProps;
        }
    }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
};

bootstrap();
