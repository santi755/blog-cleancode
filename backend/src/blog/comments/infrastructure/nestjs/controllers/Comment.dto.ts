import { IsNotEmpty, IsString } from 'class-validator';

export class CommentRequestDto {
  @IsNotEmpty()
  @IsString()
  public readonly author: string;

  @IsNotEmpty()
  @IsString()
  public readonly content: string;
}
