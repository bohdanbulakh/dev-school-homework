import { Controller, Body, Post } from '@nestjs/common';
import { CreateProductDTO } from '../dtos/CreateProductDTO';
import { ProductDataValidationPipe } from '../pipes/ProductDataValidationPipe';
import { ProductsService } from '../services/ProductsService';

@Controller('products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Post()
  async createProduct(
    @Body(new ProductDataValidationPipe()) CreateProductDTO: CreateProductDTO,
  ) {
    return await this.ProductsService.create(CreateProductDTO);
  }
}
