import { getLimit, getOffset, normalizePage, type Page, type PageInput } from "./utils/pagination"
import { first } from "remeda"
import { camelKeys } from "string-ts"
import * as SprintsQ from "./queries/sprints.queries"
import * as TasksQ from "./queries/tasks.queries"
import { pool } from "./pool"
import { throwIfN } from "./utils/coercions"

/** @gqlType */
interface Result {
    /** @gqlField */
    success: boolean
}

/** @gqlScalar Date */
export type GqlDate = Date;

/**
 * @gqlInput
 */
interface SprintFiltersInput {
    tags?: string[]
}


/** @gqlType */
interface Sprint {

    /** @gqlField */
    title: string

    /** @gqlField */
    id: string

    /** @gqlField */
    startTs: GqlDate

    /** @gqlField */
    createTs: GqlDate

    /** @gqlField */
    updateTs: GqlDate
}

/** @gqlInput */
interface SprintInput {
    title: string
    startTS: GqlDate
}

/** @gqlType */
interface SprintsPage {

    /** @gqlField */
    items: Sprint[]

    /** @gqlField */
    page: Page
}

/** @gqlType */
interface Task {
    /** @gqlField */
    id: string

    /** @gqlField */
    title: string

    /** @gqlField */
    startTs?: GqlDate | null

    /** @gqlField */
    endTs?: GqlDate | null

    /** @gqlField */
    expectedEndTs?: GqlDate | null

    /** @gqlField */
    createTs: GqlDate

    /** @gqlField */
    updateTs: GqlDate
}

/** @gqlInput */
interface TaskInput {
    title: string
    expectedEndTs?: GqlDate | null
}

/** @gqlType */
interface TasksPage {

    /** @gqlField */
    items: Task[]

    /** @gqlField */
    page: Page
}

/**
 * @gqlQueryField
 */
export async function allSprints(page: PageInput): Promise<SprintsPage> {
    const nPage = normalizePage(page)
    const rows = await SprintsQ.findAll.run({
        limit: getLimit(nPage),
        offset: getOffset(nPage),
    }, pool)
    const items = rows.map(camelKeys);
    const totalRow = await SprintsQ.countAll.run(undefined, pool)
    return {
        items,
        page: {
            ...nPage,
            total: totalRow[0]?.count ?? "0"
        }
    }
}

/** @gqlQueryField */
export async function sprintsByTags(tags: string[], page: PageInput): Promise<SprintsPage> {
    const nPage = normalizePage(page)
    const rows = await SprintsQ.findAllByTags.run({
        tags,
        limit: getLimit(nPage),
        offset: getOffset(nPage),
    }, pool)
    const items = rows.map(camelKeys);
    const totalRow = await SprintsQ.countByTags.run({ tags }, pool)
    return {
        items,
        page: {
            ...nPage,
            total: totalRow[0]?.count ?? "0"
        }
    }
}

/** @gqlQueryField */
export async function latestSprint(): Promise<Sprint | null> {
    const rows = await SprintsQ.findLatest.run(undefined, pool);
    return camelKeys(first(rows) ?? null)
}

/** @gqlField */
export async function tasks(sprint: Sprint): Promise<TasksPage> {
    const rows = await TasksQ.findAllInSprint.run({
        sprintId: sprint.id
    }, pool);
    const items = rows.map(camelKeys)
    const page: Page = {
        num: 1,
        size: items.length,
        total: `${items.length}`,
    }
    return { items, page }
}

/** @gqlMutationField */
export async function createSprint(sprint: SprintInput): Promise<Sprint> {
    const inserted = await SprintsQ.insertOne.run(sprint, pool)
    return camelKeys(throwIfN(first(inserted)))
}

/** @gqlMutationField */
export async function createTask(task: TaskInput): Promise<Task> {
    const inserted = await TasksQ.insertOne.run(task, pool)
    return camelKeys(throwIfN(first(inserted)))
}

/** @gqlMutationField */
export async function startTask(taskId: string): Promise<Result> {
    await TasksQ.start.run({ taskId }, pool);
    return { success: true }
}

/** @gqlMutationField */
export async function completeTask(taskId: string): Promise<Result> {
    await TasksQ.complete.run({ taskId }, pool);
    return { success: true }
}

/** @gqlMutationField */
export async function assignTaskToSprint(taskId: string, sprintId: string): Promise<Result> {
    await TasksQ.assignToSprint.run({ taskId, sprintId }, pool);
    return { success: true }
}

/** @gqlType */
type Query = unknown;
