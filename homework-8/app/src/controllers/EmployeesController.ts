import { Controller, Param, Body, Patch } from '@nestjs/common';
import { UpdateEmployeeDTO } from '../dtos/UpdateEmployeeDTO';
import { EmployeeByIdPipe } from '../pipes/EmployeeByIdPipe';
import { EmployeeDataValidationPipe } from '../pipes/EmployeeDataValidationPipe';
import { EmployeesService } from '../services/EmployeesService';

@Controller('employees')
export class EmployeesController {
  constructor(private EmployeesService: EmployeesService) {}

  @Patch(':employeeId')
  async updateEmployee(
    @Param('employeeId', EmployeeByIdPipe) employeeId: number,
    @Body(new EmployeeDataValidationPipe())
    UpdateEmployeeDTO: UpdateEmployeeDTO,
  ) {
    return await this.EmployeesService.update(employeeId, UpdateEmployeeDTO);
  }
}
