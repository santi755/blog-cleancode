import AggregateRoot from 'src/shared/domain/aggregate/AggregateRoot';
import UserId from 'src/blog/users/domain/UserId.vo';

export default class User extends AggregateRoot {
  constructor(
    public id: UserId,
    public username: string,
    public password: string,
  ) {
    super();
  }

  static create(id: UserId, username: string, password: string): User {
    return new User(id, username, password);
  }
}
