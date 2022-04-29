import { Module } from '@nestjs/common';
import { CoreModule } from '@api/core'
import { ProductModule } from '@api/product'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CoreModule,ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
