import { IsNotEmpty, IsString } from 'class-validator';

export class EditPostsRequestDto {
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
