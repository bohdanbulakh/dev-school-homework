import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { OrdersRepository } from '../repositories/OrdersRepository';
import { OrderedProductsRepository } from '../repositories/OrderedProductsRepository';
import { ProductsRepository } from '../repositories/ProductsRepository';
import { OrderByIdPipe } from '../pipes/OrderByIdPipe';
import { OrdersService } from '../services/OrdersService';
import { OrdersController } from '../controllers/OrdersController';

@Module({
  controllers: [OrdersController],
  providers: [
    PrismaClient,
    OrdersRepository,
    OrderedProductsRepository,
    ProductsRepository,
    OrderByIdPipe,
    OrdersService,
  ],
})
export class OrdersModule {}
