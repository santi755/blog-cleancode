import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentsDto {
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
