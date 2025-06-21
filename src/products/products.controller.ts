import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiTags, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Obtener detalle de un producto por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID del producto' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productsService.getProduct(id);
  }

}

@ApiTags('Search')
@Controller('search')
export class ProductSearchController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Buscar productos por término' })
  @ApiQuery({ name: 'q', type: String, description: 'Término de búsqueda' })
  @Get()
  async search(@Query('q') q: string) {
    return await this.productsService.search(q);
  }
}

@ApiTags('History')
@Controller('history')
export class HistoryController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Obtener historial de productos visitados' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Cantidad de productos a retornar (default 5)' })
  @Get()
  async getHistory(@Query('limit') limit: number) {
    return this.productsService.getHistory(limit);
  }
}