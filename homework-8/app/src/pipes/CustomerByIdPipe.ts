import { Injectable, PipeTransform } from '@nestjs/common';
import { NotFoundException } from '../exceptions/CommonExceptions';
import { CustomersRepository } from '../repositories/CustomersRepository';

@Injectable()
export class CustomerByIdPipe implements PipeTransform {
  constructor(private CustomersRepository: CustomersRepository) {}

  async transform(customerId: string) {
    if (!parseInt(customerId)) {
      throw new NotFoundException('Customer with such id not found');
    }

    const customer = await this.CustomersRepository.findById(+customerId);

    if (customer) {
      return +customerId;
    }
    throw new NotFoundException('Customer with such id not found');
  }
}
