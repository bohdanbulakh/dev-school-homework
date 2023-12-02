import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersRepository {
  constructor(private PrismaClient: PrismaClient) {}

  async findById(orderId: number) {
    return this.PrismaClient.orders.findFirst({
      where: { id: orderId },
    });
  }

  async findAll(where: object) {
    return this.PrismaClient.orders.findMany({ where });
  }

  async deleteById(orderId: number) {
    await this.PrismaClient.orders.delete({
      where: { id: orderId },
    });
  }
}
