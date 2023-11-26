/*
  Warnings:

  - You are about to drop the column `birth_date` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `middle_name` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `middle_name` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `order_id` on the `ordered_product` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `ordered_product` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_cost` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `employee_id` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_address` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `order_date` on the `orders` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `ordered_product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ordered_product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryCost` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderAddress` to the `orders` table without a default value. This is not possible if the table is not empty.
*/

-- AlterTable
ALTER TABLE "customers" RENAME COLUMN "birth_date" TO "birthDate";
ALTER TABLE "customers" RENAME COLUMN "first_name" TO "firstName";
ALTER TABLE "customers" RENAME COLUMN "last_name" TO "lastName";
ALTER TABLE "customers" RENAME COLUMN "middle_name" TO "middleName";
-- AlterTable
ALTER TABLE "employees" RENAME COLUMN "first_name" TO "firstName";
ALTER TABLE "employees" RENAME COLUMN "last_name" TO "lastName";
ALTER TABLE "employees" RENAME COLUMN "middle_name" TO "middleName";

-- AlterTable
ALTER TABLE "ordered_product" RENAME COLUMN "order_id" TO "orderId";
ALTER TABLE "ordered_product" RENAME COLUMN "product_id" TO "productId";

-- AlterTable
ALTER TABLE "orders" RENAME COLUMN "customer_id" TO "customerId";
ALTER TABLE "orders" RENAME COLUMN "delivery_cost" TO "deliveryCost";
ALTER TABLE "orders" RENAME COLUMN "employee_id" TO "employeeId";
ALTER TABLE "orders" RENAME COLUMN "order_address" TO "orderAddress";
ALTER TABLE "orders" RENAME COLUMN "order_date" TO "orderDate";

