import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentsRequestDto {
  @IsNotEmpty()
  @IsString()
  public readonly postId: string;

  @IsNotEmpty()
  @IsString()
  public readonly author: string;

  @IsNotEmpty()
  @IsString()
  public readonly content: string;
}
