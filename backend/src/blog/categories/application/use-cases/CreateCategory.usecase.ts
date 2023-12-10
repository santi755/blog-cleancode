import CategoryId from 'src/blog/categories/domain/value-objects/CategoryId.vo';
import Category from 'src/blog/categories/domain/entities/Category.entity';
import { CategoryRepository } from 'src/blog/categories/domain/interfaces/Categories.repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

@Injectable()
export default class CreateCategory {
  categoryRepository: CategoryRepository;

  constructor(
    @InjectRepository(Category) categoryRepository: CategoryRepository,
  ) {
    this.categoryRepository = categoryRepository;
  }

  async execute(name, slug): Promise<Category> {
    const category = Category.create(
      CategoryId.generate(),
      name,
      slug,
      CustomDate.generate(),
      CustomDate.generate(),
    );

    await this.categoryRepository.add(category);
    return category;
  }
}
