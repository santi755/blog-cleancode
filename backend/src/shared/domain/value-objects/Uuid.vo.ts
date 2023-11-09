import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuidV4, validate } from 'uuid';

export class UuidVO {
  public readonly value: string;
  constructor(value: string) {
    this.value = value;
  }

  /**
   *  This method is used to generate a new uuid.
   */
  public static generate(): UuidVO {
    return new UuidVO(uuidV4());
  }

  /*
   *  No validation explanation:
   *  - We need to return the value from DB and we don't know if the value is a valid status.
   *  - Imagine that we have these 3 valid values for a random VO: 'draft', 'published', 'deleted'. But in the future we remove the 'deleted' value.
   *  - If we validate the value, we could not return the value from DB because it is not valid.
   */
  public static fromPrimitive(value: string): UuidVO {
    return new UuidVO(value);
  }

  /**
   *  This method is used to create a new uuid from a string.
   */
  public static of(value: string): UuidVO {
    if (!validate(value)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'UUID is not valid. Must be a valid UUID v4.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return new UuidVO(value);
  }

  /**
   *  This method is used to compare two uuids.
   */
  equals(uuid: UuidVO): boolean {
    return this.value === uuid.value;
  }
}
