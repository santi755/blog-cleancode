import { CommentsDto } from './comments.dto';

describe('CommentDto', () => {
  it('should be defined', () => {
    expect(new CommentsDto()).toBeDefined();
  });
});
