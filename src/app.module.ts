import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose'
@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb+srv://testuser:4APWK5m^CuT8@guiltyspark.qsbai.mongodb.net/RoomieTest?retryWrites=true&w=majority', { useNewUrlParser: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
