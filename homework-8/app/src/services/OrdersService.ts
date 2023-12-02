import { Injectable } from '@nestjs/common';
import { OrdersRepository } from '../repositories/OrdersRepository';
import { ProductsRepository } from '../repositories/ProductsRepository';
import { OrderedProductsRepository } from '../repositories/OrderedProductsRepository';

@Injectable()
export class OrdersService {
  constructor(
    private OrdersRepository: OrdersRepository,
    private OrderedProductsRepository: OrderedProductsRepository,
    private ProductsRepository: ProductsRepository,
  ) {}

  async delete(orderId: number) {
    const order = await this.OrdersRepository.findById(orderId);
    await this.OrdersRepository.deleteById(orderId);
    return order;
  }

  async calculateOrderCost(order: any) {
    const orderedProducts = await this.OrderedProductsRepository.findAll({
      orderId: order.id,
    });
    let totalCost = order.deliveryCost;

    for (const orderedProduct of orderedProducts) {
      const product = await this.ProductsRepository.findById(
        orderedProduct.productId,
      );
      const amount = orderedProduct.amount;
      totalCost += product.price * amount;
    }

    return totalCost;
  }
}
