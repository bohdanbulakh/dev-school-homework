import { Injectable, PipeTransform } from '@nestjs/common';
import { NotFoundException } from '../exceptions/CommonExceptions';
import { EmployeesRepository } from '../repositories/EmployeesRepository';

@Injectable()
export class EmployeeByIdPipe implements PipeTransform {
  constructor(private EmployeesRepository: EmployeesRepository) {}

  async transform(employeeId: string) {
    if (!parseInt(employeeId)) {
      throw new NotFoundException('Employee with such id not found');
    }

    const employee = await this.EmployeesRepository.findBiId(+employeeId);

    if (employee) {
      return +employeeId;
    }
    throw new NotFoundException('Employee with such id not found');
  }
}
