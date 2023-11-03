import { PostsDto } from './posts.dto';

describe('PostDto', () => {
  it('should be defined', () => {
    expect(new PostsDto()).toBeDefined();
  });
});
