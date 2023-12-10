import Category from 'src/blog/categories/domain/entities/Category.entity';
import { CreateCategoryRequestDto } from 'src/blog/categories/infrastructure/nestjs/controllers/Category.dto';
import CreateCategory from 'src/blog/categories/application/use-cases/CreateCategory.usecase';
import {
  Body,
  Controller,
  Post as PostMethod,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('categories')
export default class PostCategoryController {
  constructor(readonly createCategory: CreateCategory) {}

  @PostMethod()
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createCategoryDto: CreateCategoryRequestDto,
  ): Promise<Category | any> {
    try {
      return await this.createCategory.execute(
        createCategoryDto.name,
        createCategoryDto.slug,
      );
    } catch (error) {
      throw error;
      /*throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error,
        },
        HttpStatus.BAD_REQUEST,
      );*/
    }
  }
}
