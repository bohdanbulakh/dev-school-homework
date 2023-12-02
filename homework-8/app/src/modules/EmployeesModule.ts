import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UpdateEmployeeDTO } from '../dtos/UpdateEmployeeDTO';
import { EmployeesRepository } from '../repositories/EmployeesRepository';
import { EmployeeByIdPipe } from '../pipes/EmployeeByIdPipe';
import { EmployeeDataValidationPipe } from '../pipes/EmployeeDataValidationPipe';
import { EmployeesService } from '../services/EmployeesService';
import { EmployeesController } from '../controllers/EmployeesController';

@Module({
  controllers: [EmployeesController],
  providers: [
    PrismaClient,
    UpdateEmployeeDTO,
    EmployeesRepository,
    EmployeeByIdPipe,
    EmployeeDataValidationPipe,
    EmployeesService,
  ],
})
export class EmployeesModule {}
