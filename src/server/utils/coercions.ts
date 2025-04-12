export const throwUnlessTruthy = <T>(t: T, subject?: string): NonNullable<T> => {
    if (!t) throw new Error(`Expected ${subject ?? "value"} to be truthy`)
    return t;
}

export const throwIfN = <T>(t: T, subject?: string): NonNullable<T> => {
    if (t == null) throw new Error(`Expected ${subject ?? "value"} to not be nullish`)
    return t;
}
