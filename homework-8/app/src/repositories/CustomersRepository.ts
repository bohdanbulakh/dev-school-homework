import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersRepository {
  constructor(private PrismaClient: PrismaClient) {}

  async findById(customerId: number) {
    return this.PrismaClient.customers.findFirst({ where: { id: customerId } });
  }
}
