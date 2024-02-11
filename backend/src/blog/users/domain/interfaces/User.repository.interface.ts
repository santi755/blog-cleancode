import User from 'src/blog/users/domain/User.entity';
import UsersId from 'src/blog/users/domain/UserId.vo';

export interface UsersRepository {
  search(id: UsersId): Promise<User | null>;
  add(user: User): Promise<User>;
}
