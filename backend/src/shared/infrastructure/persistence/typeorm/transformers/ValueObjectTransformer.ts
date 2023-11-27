import {
  Primitives,
  ValueObject,
} from 'src/shared/domain/value-objects/ValueObject';

// Create a Generic T transformer for value objects (from and to database)
// This transformer will be used in the entity schema
export const ValueObjectTransformer = <T extends Primitives>(
  valueObject: any,
) => ({
  to: (value: ValueObject<T>): T => value.value,
  from: (value: T): ValueObject<T> => valueObject.fromPrimitive(value),
});
