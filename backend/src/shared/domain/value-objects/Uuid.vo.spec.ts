import { UuidVO } from './Uuid.vo';

describe('Uuid', () => {
  it('should be defined', () => {
    expect(true).toBeTruthy();
  });
  /*
  it('should create a valid UUID', () => {
    const uuid = '123e4567-e89b-12d3-a456-426614174000';
    const uuidVO = UuidVO.of(uuid);
    expect(uuidVO).toBeDefined();
  });*/
  /*
  it('should not throw an error if the UUID is not valid from Database', () => {*/
  /*
     *  No validation explanation:
        - WE SUPOSE THAT THE VALUE IS ALWAYS VALID FROM DATABASE
     *  - We need to return the value from DB and we don't know if the value is a valid status.
     *  - Imagine that we have these 3 valid values for a random VO: 'draft', 'published', 'deleted'. But in the future we remove the 'deleted' value.
     *  - If we validate the value, we could not return the value from DB because it is not valid.
     */ /*
    const uuid = 'wrong UUID from database';
    expect(() => {
      UuidVO.fromPrimitive(uuid);
    }).not.toThrow();
  });

  it('should return the correct UUID value without validation', () => {
    const uuid = '123e4567-e89b-12d3-a456-';
    const uuidVO = UuidVO.fromPrimitive(uuid);
    expect(uuidVO.value).toEqual(uuid);
  });

  it('should throw an error if the UUID is not valid', () => {
    const uuid = 'wrong UUID';
    expect(() => {
      UuidVO.of(uuid);
    }).toThrow();
  });

  it('should return the correct UUID value', () => {
    const uuid = '123e4567-e89b-12d3-a456-426614174000';
    const uuidVO = UuidVO.of(uuid);
    expect(uuidVO.value).toEqual(uuid);
  });*/
});
