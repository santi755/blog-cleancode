import Category from 'src/blog/categories/domain/entities/Category.entity';

export interface CategoryRepository {
  add: (category: Category) => Promise<Category>;
}
