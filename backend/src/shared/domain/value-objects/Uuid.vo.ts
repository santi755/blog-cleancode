import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuidV4, validate } from 'uuid';
import { ValueObject } from './ValueObject';

export class UuidVO extends ValueObject<string> {
  protected constructor(value: string) {
    super(value);
  }

  public static generate(): UuidVO {
    return new UuidVO(uuidV4());
  }

  public static fromPrimitive(value: string): UuidVO {
    return new UuidVO(value);
  }

  public static of(value: string): UuidVO {
    if (!validate(value)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'UUID is not valid.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return new UuidVO(value);
  }

  equals(uuid: UuidVO): boolean {
    return this.value === uuid.value;
  }
}
