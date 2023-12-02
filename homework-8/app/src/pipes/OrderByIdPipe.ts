import { Injectable, PipeTransform } from '@nestjs/common';
import { NotFoundException } from '../exceptions/CommonExceptions';
import { OrdersRepository } from '../repositories/OrdersRepository';

@Injectable()
export class OrderByIdPipe implements PipeTransform {
  constructor(private OrdersRepository: OrdersRepository) {}

  async transform(orderId: string) {
    if (!parseInt(orderId)) {
      throw new NotFoundException('Order with such id not found');
    }

    const order = await this.OrdersRepository.findById(+orderId);

    if (order) {
      return +orderId;
    } else {
      throw new NotFoundException('Order with such id not found');
    }
  }
}
