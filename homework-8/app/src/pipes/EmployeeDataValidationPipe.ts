import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ForbiddenException } from '../exceptions/CommonExceptions';

@Injectable()
export class EmployeeDataValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const object = plainToInstance(metatype, value);
    const errors = await validate(object, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      throw new ForbiddenException('Invalid request data');
    }

    return value;
  }
}
