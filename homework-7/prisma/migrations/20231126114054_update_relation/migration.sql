-- DropForeignKey
ALTER TABLE "orderedProduct" DROP CONSTRAINT "orderedProduct_orderId_fkey";

-- AddForeignKey
ALTER TABLE "orderedProduct" ADD CONSTRAINT "orderedProduct_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
