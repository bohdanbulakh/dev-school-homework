import { Controller, Get, Param } from '@nestjs/common';
import { CustomerByIdPipe } from '../pipes/CustomerByIdPipe';
import { CustomersService } from '../services/CustomersService';

@Controller('customers')
export class CustomersController {
  constructor(private CustomersService: CustomersService) {}

  @Get(':customerId/orders')
  async findOrders(@Param('customerId', CustomerByIdPipe) customerId: number) {
    return this.CustomersService.getCustomerOrders(customerId);
  }
}
