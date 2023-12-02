import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesRepository {
  constructor(private PrismaClient: PrismaClient) {}

  async findBiId(employeeId: number) {
    return this.PrismaClient.employees.findFirst({ where: { id: employeeId } });
  }

  async updateById(employeeId: number, data: any) {
    return this.PrismaClient.employees.update({
      where: { id: employeeId },
      data,
    });
  }
}
