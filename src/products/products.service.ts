import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import axios from "axios/index";
import {InjectModel} from "@nestjs/sequelize";
import {Product} from "./entities/product.entity";
import { plainToInstance } from 'class-transformer';

const URL_DUMMYJSON = 'https://dummyjson.com/products';

@Injectable()
export class ProductsService {

  constructor(
      @InjectModel(Product)
      private productModel: typeof Product,
  ) {}


  async search(q: string){
    const response = await axios.get(URL_DUMMYJSON + `/search?q=${q}`);
    return plainToInstance(ProductDto, response.data.products, {
      excludeExtraneousValues: false,
    });
  }

  async getProduct(id){
    const response = await axios.get(URL_DUMMYJSON + `/${id}`);
    const product = response.data;
    await this.addToHistory(product);
    return product;
  }

  async addToHistory(product: ProductDto) {
    await this.productModel.destroy({ where: { productId: product.id } });

    await this.productModel.create(<Product> product);
  }

  async getHistory(limit = 5) {
    return this.productModel.findAll({
      limit: limit,
      order: [['createdAt', 'DESC']],
    });
  }

}
