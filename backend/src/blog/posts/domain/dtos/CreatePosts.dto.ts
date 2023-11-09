import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostsDto {
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
