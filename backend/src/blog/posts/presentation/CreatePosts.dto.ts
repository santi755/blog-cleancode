import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostsRequestDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsString()
  readonly status: string;
}
