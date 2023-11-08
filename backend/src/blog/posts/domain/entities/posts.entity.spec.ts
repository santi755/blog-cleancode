import { Posts } from './posts.entity';

describe('PostEntity', () => {
  let post: Posts;

  const newDate = new Date();

  it('should create a post', () => {
    post = new Posts({
      id: '',
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
    const uuidformatRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

    expect(post.idValue).toMatch(uuidformatRegex);
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
