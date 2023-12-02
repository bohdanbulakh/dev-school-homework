import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  constructor(private PrismaClient: PrismaClient) {}

  async findById(productId: number) {
    return this.PrismaClient.products.findFirst({
      where: { id: productId },
    });
  }

  async findAll(where: object) {
    return this.PrismaClient.products.findMany({ where });
  }

  async create(data: any) {
    return this.PrismaClient.products.create({ data });
  }
}
