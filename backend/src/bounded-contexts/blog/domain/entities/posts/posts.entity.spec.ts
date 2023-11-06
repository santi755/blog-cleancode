import { Posts } from './posts.entity';

describe('PostEntity', () => {
  it('should be defined', () => {
    expect(
      new Posts('id', new Date(), new Date(), 'title', 'content', 'status'),
    ).toBeDefined();
  });
});
