import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../repositories/OrdersRepository';
import { OrdersService } from './OrdersService';

@Injectable()
export class CustomersService {
  constructor(
    private OrdersRepository: OrdersRepository,
    private OrdersService: OrdersService,
  ) {}

  async getCustomerOrders(customerId: number) {
    const customerOrders: any = await this.OrdersRepository.findAll({
      customerId,
    });
    let totalCost = 0;

    for (const i in customerOrders) {
      const orderCost = await this.OrdersService.calculateOrderCost(
        customerOrders[+i],
      );
      customerOrders[+i] = { ...customerOrders[+i], totalCost: orderCost };
      totalCost += orderCost;
    }

    return { orders: customerOrders, totalCost };
  }
}
