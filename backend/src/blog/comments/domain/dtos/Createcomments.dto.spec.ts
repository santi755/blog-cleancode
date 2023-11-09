import { CreateCommentsDto } from './CreateComments.dto';

describe('CommentDto', () => {
  it('should be defined', () => {
    expect(new CreateCommentsDto()).toBeDefined();
  });
});
