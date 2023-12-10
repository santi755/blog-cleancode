import { EntitySchema } from 'typeorm';
import { ValueObjectTransformer } from 'src/shared/infrastructure/persistence/typeorm/transformers/ValueObjectTransformer';
import Category from 'src/blog/categories/domain/entities/Category.entity';
import CategoryId from 'src/blog/categories/domain/value-objects/CategoryId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

export default new EntitySchema<Category>({
  name: 'Category',
  tableName: 'categories',
  target: Category,
  columns: {
    id: {
      type: String,
      primary: true,
      transformer: ValueObjectTransformer(CategoryId),
    },
    name: {
      type: String,
    },
    slug: {
      type: String,
    },
    createdAt: {
      type: Date,
      transformer: ValueObjectTransformer(CustomDate),
    },
    updatedAt: {
      type: Date,
      transformer: ValueObjectTransformer(CustomDate),
    },
  },
  /*
  relations: {
    post: {
      target: 'Post',
      type: 'many-to-one',
      joinColumn: true,
      cascade: true,
      eager: false,
      inverseSide: 'comments',
    },
  },
  */
});
