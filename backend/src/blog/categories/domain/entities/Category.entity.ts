import AggregateRoot from 'src/shared/domain/aggregate/AggregateRoot';
import CategoryId from 'src/blog/categories/domain/value-objects/CategoryId.vo';
import CustomDate from 'src/shared/domain/value-objects/CustomDate.vo';

export default class Category extends AggregateRoot {
  constructor(
    public id: CategoryId,
    public name: string,
    public slug: string,
    public createdAt: CustomDate,
    public updatedAt: CustomDate,
  ) {
    super();
  }

  static create(id, name, slug, createdAt, updatedAt): Category {
    return new Category(id, name, slug, createdAt, updatedAt);
  }
}
