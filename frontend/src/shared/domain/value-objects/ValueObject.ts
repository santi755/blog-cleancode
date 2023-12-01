// eslint-disable-next-line @typescript-eslint/ban-types
export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
    readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static fromPrimitive(value: string): any {
        /*
         *  No validation explanation:
         *  - We need to return the value from DB and we don't know if the value is a valid status.
         *  - Imagine that we have these 3 valid values for a random VO: 'draft', 'published', 'deleted'. But in the future we remove the 'deleted' value.
         *  - If we validate the value, we could not return the value from DB because it is not valid.
         */
        throw Error('Not implemented');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static of(value: string): any {
        throw Error('Not implemented');
    }

    equals(other: ValueObject<T>): boolean {
        return (
            this.constructor.name === other.constructor.name &&
            this.value === other.value
        );
    }

    toString(): string {
        return this.value.toString();
    }
}
