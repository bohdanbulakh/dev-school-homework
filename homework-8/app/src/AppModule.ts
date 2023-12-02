import { Module } from '@nestjs/common';
import { CustomersModule } from './modules/CustomersModule';
import { OrdersModule } from './modules/OrdersModule';
import { ProductsModule } from './modules/ProductsModule';
import { EmployeesModule } from './modules/EmployeesModule';

@Module({
  imports: [CustomersModule, OrdersModule, ProductsModule, EmployeesModule],
})
export class AppModule {}
