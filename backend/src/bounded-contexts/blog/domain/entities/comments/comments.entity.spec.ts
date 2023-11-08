import { Comments } from './comment.entity';

describe('CommentEntity', () => {
  it('should be defined', () => {
    expect(
      new Comments({
        id: '',
        postId: '',
        author: 'author',
        content: 'content',
        createdAt: new Date(),
      }),
    ).toBeDefined();
  });
});
