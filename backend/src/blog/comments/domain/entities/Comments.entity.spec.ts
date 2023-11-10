import { Comments } from './Comments.entity';
import { validate } from 'uuid';

describe('CommentsEntity', () => {
  let comment: Comments;

  const newDate = new Date();

  it('should create a comment', () => {
    comment = new Comments({
      id: null,
      createdAt: newDate,
      content: 'content',
      author: 'author1',
      postId: 'postId',
    });
    expect(comment).toBeDefined();
  });

  it('should be defined', () => {
    expect(comment).toBeDefined();
  });

  it('should return the correct comment values', () => {
    const validUuid = validate(comment.idValue);

    expect(validUuid).toBeTruthy();
    expect(comment.createdAtValue).toEqual(newDate);
    expect(comment.contentValue).toEqual('content');
    expect(comment.authorValue).toEqual('author1');
    expect(comment.postIdValue).toEqual('postId');
  });
});
