import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './database/database.config';


@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
