import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ForbiddenException } from '../exceptions/CommonExceptions';

@Injectable()
export class ProductDataValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      throw new ForbiddenException('Invalid product category');
    }

    return value;
  }
}
