import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderedProductsRepository {
  constructor(private PrismaClient: PrismaClient) {}

  async findAll(where: object) {
    return this.PrismaClient.orderedProduct.findMany({ where });
  }
}
