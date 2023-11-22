import { HttpException, HttpStatus } from '@nestjs/common';
import { ValueObject } from 'src/shared/domain/value-objects/ValueObject';

enum validStatus {
  draft = 'draft',
  published = 'published',
  deleted = 'deleted',
}

export default class PostsStatus extends ValueObject<string> {
  protected constructor(value: string) {
    super(value);
  }

  /*
   *  No validation explanation:
   *  - We need to return the value from DB and we don't know if the value is a valid status.
   *  - Imagine that we have these 3 valid values for a random VO: 'draft', 'published', 'deleted'. But in the future we remove the 'deleted' value.
   *  - If we validate the value, we could not return the value from DB because it is not valid.
   */
  public static fromPrimitive(value: string): PostsStatus {
    return new PostsStatus(value);
  }

  /**
   *  This method is used to create a new PostsStatus from a string.
   */
  public static of(value: string): PostsStatus {
    if (!validStatus[value]) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error:
            'Post status is not valid. Must be draft | published | deleted',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return new PostsStatus(value);
  }

  /**
   *  This method is used to compare two PostsStatus.
   */
  equals(status: PostsStatus): boolean {
    return this.value === status.value;
  }
}
