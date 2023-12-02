import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../repositories/ProductsRepository';
import { CreateProductDTO } from '../dtos/CreateProductDTO';

@Injectable()
export class ProductsService {
  constructor(private ProductsRepository: ProductsRepository) {}

  async create(data: CreateProductDTO) {
    return this.ProductsRepository.create(data);
  }
}
