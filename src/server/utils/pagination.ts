import type { Int } from "grats"

/** @gqlInput */
export interface PageInput {
    num?: Int
    size?: Int
}

/** @gqlType */
export interface Page {

    /** @gqlField */
    num: Int

    /** @gqlField */
    size: Int

    /** @gqlField */
    total: string
}

export type NPage = Omit<Page, "total">;

export function normalizePage(input: PageInput): NPage {
    return {
        num: input.num ?? 1,
        size: input.size ?? 100,
    }
}

export function getLimit(input: NPage) {
    return input.size;
}

export function getOffset(input: NPage) {
    return (input.num - 1) * input.size;
}

export function ensureCount(rows: { count?: string | null }[]) {
    return rows[0]?.count ?? "0"
}