import { CreatePostsDto } from './createPosts.dto';

describe('PostsDto', () => {
  it('should be defined', () => {
    expect(new CreatePostsDto()).toBeDefined();
  });
});
