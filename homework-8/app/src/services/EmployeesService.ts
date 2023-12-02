import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from '../repositories/EmployeesRepository';
import { UpdateEmployeeDTO } from '../dtos/UpdateEmployeeDTO';

@Injectable()
export class EmployeesService {
  constructor(private EmployeesRepository: EmployeesRepository) {}

  async update(employeeId: number, data: UpdateEmployeeDTO) {
    return this.EmployeesRepository.updateById(employeeId, data);
  }
}
