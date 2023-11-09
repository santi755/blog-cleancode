import { CreatePostsDto } from './CreatePosts.dto';

describe('PostsDto', () => {
  it('should be defined', () => {
    expect(new CreatePostsDto()).toBeDefined();
  });
});
