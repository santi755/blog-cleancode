import { v4 as uuid } from 'uuid';

/*
  TODO:
    - Refactor this class to be a generic class
    - Move this class to the folder: backend/src/shared/domain/value-objects
*/

export class UuidVO {
  public readonly value: string;
  constructor(value: string) {
    this.value = value ? value : uuid();
  }
}

/*
export class UuidVO {
  public readonly value: string;
  constructor(value: string) {
    if (!validate(value)) {
      throw new Error('Invalid uuid');
    }
  }

  static generate(): UuidVO {
    return new this(UuidV4());
  }

  // TODO: Check bien - Se llama antes de insertar en la base de datos
  public static of(params: { value: string }): PostsStatus {
    this.isValidStatus(params.value);
    return new PostsStatus(params.value);
  }

  // TODO: Check bien - Recoge datos sin hacer una comprorbación
  public static fromPrimitives(value: string): PostsStatus {
    return new PostsStatus(value);
  }
}
 */
