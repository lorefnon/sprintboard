import type { FieldsSelection } from "./gen/runtime";
import type { PageGenqlSelection, Sprint, SprintGenqlSelection, Task, TaskGenqlSelection } from "./gen/schema";

export const pageSelection = {
    num: true,
    size: true,
    total: true,
} satisfies PageGenqlSelection

export const taskSelection = {
    id: true,
    title: true,
    startTs: true,
    endTs: true,
    createTs: true,
    updateTs: true,
    expectedEndTs: true,
} satisfies TaskGenqlSelection

export type TaskSel = FieldsSelection<Task, typeof taskSelection>

export const sprintSelection = {
    id: true,
    title: true,
    createTs: true,
    startTs: true,
    updateTs: true,
} satisfies SprintGenqlSelection

export type SprintSel = FieldsSelection<Sprint, typeof sprintSelection>

