import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryRequestDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;
}
