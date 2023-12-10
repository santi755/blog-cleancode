import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuidV4, validate } from 'uuid';
import { ValueObject } from './ValueObject';

export class Uuid extends ValueObject<string> {
  protected constructor(value: string) {
    super(value);
  }

  public static generate(): Uuid {
    return new Uuid(uuidV4());
  }

  public static fromPrimitive(value: string): Uuid {
    return new Uuid(value);
  }

  public static of(value: string): Uuid {
    if (!validate(value)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'UUID is not valid.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return new Uuid(value);
  }

  equals(uuid: Uuid): boolean {
    return this.value === uuid.value;
  }

  toString(): string {
    return this.value;
  }
}
