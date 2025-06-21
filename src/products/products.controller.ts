import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.getProduct(id);
  }

}

@Controller('search')
export class ProductSearchController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async search(@Query('q') q: string) {
    return await this.productsService.search(q);
  }
}

@Controller('history')
export class HistoryController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getHistory(@Query('limit') limit: number) {
    return this.productsService.getHistory(limit);
  }
}