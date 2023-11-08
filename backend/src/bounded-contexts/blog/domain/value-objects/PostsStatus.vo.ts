import { HttpException, HttpStatus } from '@nestjs/common';

export class PostsStatus {
  public readonly value: string;
  constructor(value: string) {
    this.value = value;

    this.isValidStatus(value);
  }

  getValue(): string {
    return this.value;
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
}
