import { validate } from 'uuid';
import { Posts } from './Posts.entity';

describe('PostEntity', () => {
  let post: Posts;

  const newDate = new Date();

  it('should create a post', () => {
    post = new Posts({
      id: null,
      publishedAt: newDate,
      editedAt: newDate,
      title: 'title',
      content: 'content',
      status: 'draft',
    });
    expect(post).toBeDefined();
  });

  it('should be defined', () => {
    expect(post).toBeDefined();
  });

  it('should return the correct posts values', () => {
    const validUuid = validate(post.idValue);

    expect(validUuid).toBeTruthy();
    expect(post.publishedAtValue).toEqual(newDate);
    expect(post.editedAtValue).toEqual(newDate);
    expect(post.titleValue).toEqual('title');
    expect(post.contentValue).toEqual('content');
    expect(post.statusValue).toEqual('draft');
  });

  it('should throw an error if the status is not valid', () => {
    expect(() => {
      post = new Posts({
        id: '',
        publishedAt: newDate,
        editedAt: newDate,
        title: 'title',
        content: 'content',
        status: 'random stuff',
      });
    }).toThrow();
  });
});
