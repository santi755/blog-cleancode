import { Posts } from './posts.entity';

describe('PostEntity', () => {
  it('should be defined', () => {
    expect(new Posts()).toBeDefined();
  });
});
