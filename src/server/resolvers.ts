import { ensureCount, getLimit, getOffset, normalizePage, type Page, type PageInput } from "./utils/pagination"
import { first } from "remeda"
import { camelKeys } from "string-ts"
import * as SprintsQ from "./queries/sprints.queries"
import * as TasksQ from "./queries/tasks.queries"
import * as TagsQ from "./queries/tags.queries"
import * as AppUsersQ from "./queries/app-users.queries"
import { pool } from "./pool"
import { throwIfN } from "./utils/coercions"

/** @gqlType */
export interface Result {
    /** @gqlField */
    success: boolean
}

/** @gqlScalar Date */
export type GqlDate = Date;

/** @gqlInput */
export interface SprintFiltersInput {
    tagIds?: string[]
}

/** @gqlInput */
export interface TaskFiltersInput {
    sprintId?: string
    assigneeIds?: string[]
    tagIds?: string[]
}

/** @gqlType */
export interface Sprint {

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
export interface SprintInput {
    title: string
    startTS: GqlDate
}

/** @gqlType */
export interface SprintsPage {

    /** @gqlField */
    items: Sprint[]

    /** @gqlField */
    page: Page
}

/** @gqlType */
export interface Task {
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
export interface TaskInput {
    title: string
    expectedEndTs?: GqlDate | null
}

/** @gqlType */
export interface TasksPage {

    /** @gqlField */
    items: Task[]

    /** @gqlField */
    page: Page
}

/** @gqlType */
export interface Tag {
    /** @gqlField */
    id: string
    /** @gqlField */
    name: string
}

/** @gqlInput */
export interface TagInput {
    name: string
}

/** @gqlType */
export interface TagsPage {
    /** @gqlField */
    items: Tag[]
}

/** @gqlType */
export interface AppUser {
    /** @gqlField */
    id: string;
    /** @gqlField */
    name: string;
    /** @gqlField */
    email: string
}

/** @gqlInput */
export interface AppUserInput {
    name: string
    email: string
}

/** @gqlType */
export interface AppUsersPage {
    /** @gqlField */
    items: AppUser[]
}

/**
 * @gqlQueryField
 */
export async function sprints(filters: SprintFiltersInput, page: PageInput): Promise<SprintsPage> {
    const nPage = normalizePage(page)
    const rows = await SprintsQ.findMany.run({
        ...filters,
        limit: getLimit(nPage),
        offset: getOffset(nPage),
    }, pool)
    const items = rows.map(camelKeys);
    const totalRow = await SprintsQ.findCount.run({
        tagIds: filters.tagIds
    }, pool)
    return {
        items,
        page: {
            ...nPage,
            total: ensureCount(totalRow),
        }
    }
}

/** @gqlQueryField */
export async function tasks(filters: TaskFiltersInput, page: PageInput): Promise<TasksPage> {
    const nPage = normalizePage(page)
    const rows = await TasksQ.findMany.run({
        ...filters,
        limit: getLimit(nPage),
        offset: getOffset(nPage),
    }, pool)
    const items = rows.map(camelKeys);
    const totalRow = await TasksQ.findCount.run(filters, pool)
    return {
        items,
        page: {
            ...nPage,
            total: ensureCount(totalRow),
        }
    }
}

/** @gqlQueryField */
export async function tags(): Promise<TagsPage> {
    const rows = await TagsQ.findMany.run({}, pool);
    const items = rows.map(camelKeys);
    return { items }
}

/** @gqlQueryField */
export async function latestSprint(): Promise<Sprint | null> {
    const rows = await SprintsQ.findLatest.run(undefined, pool);
    return camelKeys(first(rows) ?? null)
}

/** @gqlField tasks */
export async function sprintTasks(sprint: Sprint, page: PageInput): Promise<TasksPage> {
    const nPage = normalizePage(page)
    const rows = await TasksQ.findMany.run({
        sprintId: sprint.id,
        limit: getLimit(nPage),
        offset: getOffset(nPage),
    }, pool);
    const items = rows.map(camelKeys)
    const totalRow = await TasksQ.findCount.run({
        sprintId: sprint.id,
    }, pool)
    return {
        items,
        page: {
            ...nPage,
            total: totalRow[0]?.count ?? "0"
        }
    }
}

/** @gqlField tags */
export async function sprintTags(sprint: Sprint): Promise<TagsPage> {
    const rows = await TagsQ.findMany.run({ sprintIds: [sprint.id] }, pool);
    const items = rows.map(camelKeys);
    return { items }
}

/** @gqlField tags */
export async function taskTags(task: Task): Promise<TagsPage> {
    const rows = await TagsQ.findMany.run({ taskIds: [task.id] }, pool);
    const items = rows.map(camelKeys);
    return { items }
}

/** @gqlField assignees */
export async function taskAssignees(task: Task): Promise<AppUsersPage> {
    const rows = await AppUsersQ.findTaskAssignee.run({ taskIds: [task.id] }, pool);
    const items = rows.map(camelKeys);
    return { items }
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
export async function createAppUser(appUser: AppUserInput): Promise<AppUser> {
    const inserted = await AppUsersQ.insertOne.run(appUser, pool)
    return camelKeys(throwIfN(first(inserted)))
}

/** @gqlMutationField */
export async function createTag(tag: TagInput): Promise<Tag> {
    const inserted = await TagsQ.insertOne.run(tag, pool)
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

/** @gqlMutationField */
export async function assignTagToSprint(sprintId: string, tagId: string): Promise<Result> {
    await SprintsQ.assignTag.run({
        sprintId,
        tagId
    }, pool)
    return { success: true }
}

/** @gqlMutationField */
export async function assignTagToTask(taskId: string, tagId: string): Promise<Result> {
    await TasksQ.assignTag.run({
        taskId,
        tagId
    }, pool)
    return { success: true }
}

/** @gqlMutationField */
export async function removeSprintTag(sprintId: string, tagId: string): Promise<Result> {
    await SprintsQ.removeTag.run({
        sprintId,
        tagId
    }, pool)
    return { success: true }
}

/** @gqlMutationField */
export async function removeTaskTag(taskId: string, tagId: string): Promise<Result> {
    await TasksQ.removeTag.run({
        taskId,
        tagId
    }, pool)
    return { success: true }
}

/** @gqlMutationField */
export async function addAssignee(taskId: string, assigneeId: string): Promise<Result> {
    await TasksQ.addAssignee.run({
        taskId,
        assigneeId,
    }, pool)
    return { success: true }
}

/** @gqlMutationField */
export async function removeAssignee(taskId: string, assigneeId: string): Promise<Result> {
    await TasksQ.removeAssignee.run({
        taskId,
        assigneeId,
    }, pool)
    return { success: true }
}

/** @gqlType */
export type Query = unknown;
