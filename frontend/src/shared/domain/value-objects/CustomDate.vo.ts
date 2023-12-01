import { ValueObject } from './ValueObject';

export default class CustomDate extends ValueObject<Date> {
    protected constructor(value: Date) {
        super(value);
    }

    static generate() {
        return new CustomDate(new Date());
    }

    static fromPrimitive(value) {
        return new CustomDate(new Date(value));
    }

    static of(value) {
        return new CustomDate(value);
    }

    equals(date) {
        return this.value === date.value;
    }
}
