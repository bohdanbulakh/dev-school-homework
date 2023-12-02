import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CustomersRepository } from '../repositories/CustomersRepository';
import { OrdersRepository } from '../repositories/OrdersRepository';
import { OrderedProductsRepository } from '../repositories/OrderedProductsRepository';
import { ProductsRepository } from '../repositories/ProductsRepository';
import { CustomersService } from '../services/CustomersService';
import { OrdersService } from '../services/OrdersService';
import { CustomersController } from '../controllers/CustomersController';

@Module({
  controllers: [CustomersController],
  providers: [
    PrismaClient,
    CustomersRepository,
    OrdersRepository,
    OrderedProductsRepository,
    ProductsRepository,
    CustomersService,
    OrdersService,
  ],
})
export class CustomersModule {}
