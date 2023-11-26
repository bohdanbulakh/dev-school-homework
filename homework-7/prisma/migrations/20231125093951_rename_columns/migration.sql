-- RenameForeignKey
ALTER TABLE "ordered_product" RENAME CONSTRAINT "ordered_product_order_id_fkey" TO "ordered_product_orderId_fkey";

-- RenameForeignKey
ALTER TABLE "ordered_product" RENAME CONSTRAINT "ordered_product_product_id_fkey" TO "ordered_product_productId_fkey";

-- RenameForeignKey
ALTER TABLE "orders" RENAME CONSTRAINT "orders_customer_id_fkey" TO "orders_customerId_fkey";

-- RenameForeignKey
ALTER TABLE "orders" RENAME CONSTRAINT "orders_employee_id_fkey" TO "orders_employeeId_fkey";
