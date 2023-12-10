import { DataSource, Repository } from 'typeorm';
import { CategoryRepository } from 'src/blog/categories/domain/interfaces/Categories.repository.interface';
import { Injectable } from '@nestjs/common';
import Category from 'src/blog/categories/domain/entities/Category.entity';

@Injectable()
export class TypeOrmCategoriesRepository
  extends Repository<Category>
  implements CategoryRepository
{
  constructor(private dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }

  async add(category: Category): Promise<Category | null> {
    return await this.save(category);
  }
}
