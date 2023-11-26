-- AlterTable
ALTER TABLE "orderedProduct" RENAME CONSTRAINT "ordered_product_pkey" TO "orderedProduct_pkey";

-- RenameForeignKey
ALTER TABLE "orderedProduct" RENAME CONSTRAINT "ordered_product_orderId_fkey" TO "orderedProduct_orderId_fkey";

-- RenameForeignKey
ALTER TABLE "orderedProduct" RENAME CONSTRAINT "ordered_product_productId_fkey" TO "orderedProduct_productId_fkey";
