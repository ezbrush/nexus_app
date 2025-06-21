import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import {HistoryController, ProductsController, ProductSearchController} from './products.controller';
import { Product } from './entities/product.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductsController, ProductSearchController, HistoryController],
  providers: [ProductsService],
})
export class ProductsModule {}
