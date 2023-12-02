import { IsInt, IsString, IsIn } from 'class-validator';
import { category } from '@prisma/client';

export class CreateProductDTO {
  @IsString()
  name: string;

  @IsIn(Object.values(category))
  category: string;

  @IsInt()
  amount: number;

  @IsInt()
  price: number;
}
