import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductDTO } from '../dtos/CreateProductDTO';
import { ProductsRepository } from '../repositories/ProductsRepository';
import { ProductDataValidationPipe } from '../pipes/ProductDataValidationPipe';
import { ProductsService } from '../services/ProductsService';
import { ProductsController } from '../controllers/ProductsController';

@Module({
  controllers: [ProductsController],
  providers: [
    PrismaClient,
    CreateProductDTO,
    ProductsRepository,
    ProductDataValidationPipe,
    ProductsService,
  ],
})
export class ProductsModule {}
