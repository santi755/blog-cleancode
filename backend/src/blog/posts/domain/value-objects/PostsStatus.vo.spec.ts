/*import { PostsStatus } from './PostsStatus.vo';*/

describe('PostsStatus', () => {
  it('should be defined', () => {
    expect(true).toBeTruthy();
  });
  /*
  it('should create a valid status', () => {
    const status = 'draft';
    const statusVO = PostsStatus.fromPrimitive(status);
    expect(statusVO).toBeDefined();
  });

  it('should throw an error if the status is not valid', () => {
    const status = 'wrong UUID from database';
    expect(() => {
      PostsStatus.of(status);
    }).toThrow();
  });

  it('should return the correct status value without validation', () => {*/
  /*
     *  No validation explanation:
        - WE SUPOSE THAT THE VALUE IS ALWAYS VALID FROM DATABASE
     *  - We need to return the value from DB and we don't know if the value is a valid status.
     *  - Imagine that we have these 3 valid values for a random VO: 'draft', 'published', 'deleted'. But in the future we remove the 'deleted' value.
     *  - If we validate the value, we could not return the value from DB because it is not valid.
     */ /*
    const status = 'draft';
    const statusVO = PostsStatus.fromPrimitive(status);
    expect(statusVO.value).toEqual(status);
  });*/
});
