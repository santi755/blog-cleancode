import { HttpException, HttpStatus } from '@nestjs/common';

export class PostsStatus {
  public readonly value: string;
  constructor(value: string) {
    this.value = value;

    this.isValidStatus(value);
  }

  private isValidStatus(status: string): void {
    const validStatus = ['draft', 'published', 'deleted'];
    if (!validStatus.includes(status)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error:
            'Post status is not valid. Must be draft | published | deleted',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // TODO: Check bien - Se llama antes de insertar en la base de datos
  /*
  public static of(params: { value: string }): PostsStatus {
    this.isValidStatus(params.value);
    return new PostsStatus(params.value);
  }
  */

  // TODO: Check bien - Recoge datos sin hacer una comprorbación
  /*
  public static fromPrimitives(value: string): PostsStatus {
    return new PostsStatus(value);
  }
  */
}
