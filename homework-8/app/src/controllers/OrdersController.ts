import { Controller, Param, Delete } from '@nestjs/common';
import { OrderByIdPipe } from '../pipes/OrderByIdPipe';
import { OrdersService } from '../services/OrdersService';

@Controller('orders')
export class OrdersController {
  constructor(private OrdersService: OrdersService) {}

  @Delete(':orderId')
  async deleteOrder(@Param('orderId', OrderByIdPipe) orderId: number) {
    return this.OrdersService.delete(orderId);
  }
}
