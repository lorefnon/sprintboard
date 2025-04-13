<template lang="pug">
n-flex.sb-header(justify="space-around", align="center")
    .sb-app-title Sprint Board
    n-button(string, secondary, type="tertiary").sb-sprint-title(
        @click="activeDrawer = 'sprints'"
    )
        | {{ sprint?.title }}
    .u-f-grow
    n-popover(
        placement="bottom"
        trigger="click"
    )
        template(#trigger)
            n-button(type="info") New Sprint

        new-sprint-form(
            @success="onSprintCreate"
        )
    n-popover(
        v-if="sprint"
        placement="bottom"
        trigger="click"
    )
        template(#trigger)
            n-button(type="info") New Task

        new-task-form(
            @success="onTaskCreate"
        )
.sb-tasks-cols
    .sb-task-col(v-for="status in allStatus")
        header {{ status }}
        .task-col-inner
            task-card(
                v-for="t in groupedTasks[status]"
                :task="t"
            )
n-drawer(
    :show="activeDrawer === 'sprints'"
    v-on:hide="activeDrawer = null"
    placement="left"
)
    n-drawer-content(title="Sprints")
        sprint-selector(
            @select="onSelectSprint"
        )
</template>

<script setup lang="ts">
import { useAsyncState } from "@vueuse/core";
import { type Client, type FieldsSelection, type Sprint, type SprintGenqlSelection } from "../api-client"
import { computed, inject, onMounted, ref } from "vue";
import TaskCard from "./task-card.vue"
import { throwIfN } from "../../server/utils/coercions";
import { groupBy } from "remeda";
import { NDrawer, NDrawerContent, NFlex, NButton, NPopover } from "naive-ui"
import NewSprintForm from "./new-sprint-form.vue";
import NewTaskForm from "./new-task-form.vue";
import { type TaskSel, type SprintSel, sprintSelection, taskSelection, pageSelection } from "../api-client/selections";
import sprintSelector from "./sprint-selector.vue";

const gql = throwIfN(inject<Client>("gql"))

const sprint = ref<SprintSel | null>(null)
const tasks = ref<TaskSel[]>([]);
const activeDrawer = ref<null | "tasks" | "sprints">(null)

const sprintWithTasksSelection = {
    ...sprintSelection,
    tasks: {
        __args: { page: { num: 1 } },
        items: taskSelection,
        page: pageSelection,
    }
} satisfies SprintGenqlSelection

export type SprintWithTasksSel = FieldsSelection<Sprint, typeof sprintWithTasksSelection>

const fetchLatestSprintT = useAsyncState(
    () => gql.query({
        latestSprint: sprintWithTasksSelection
    }),
    null,
    { immediate: false }
)

const fetchSprintTasksT = useAsyncState(
    async () => {
        const sprintId = sprint.value?.id
        if (!sprintId) return null;
        const res = await gql.query({
            tasks: {
                __args: {
                    filters: { sprintId },
                    page: { num: 1 }
                },
                items: {
                    ...taskSelection
                }
            }
        });
        return res.tasks?.items;
    },
    null,
    { immediate: false }
)

onMounted(() => {
    fetchLatestSprintT.execute().then(s => {
        sprint.value = s?.latestSprint ?? null
        tasks.value = s?.latestSprint?.tasks?.items ?? []
    })
})

const groupedTasks = computed(() => {
    return groupBy(tasks.value, task => {
        if (task.endTs) return "COMPLETE";
        if (task.startTs) return "ONGOING";
        return "PENDING"
    })
})

const allStatus = ['PENDING', 'ONGOING', 'COMPLETE'] as const

const onSprintCreate = async (created: SprintSel) => {
    sprint.value = created
    tasks.value = []
    fetchSprintTasksT.execute().then(items => {
        if (items) tasks.value = items;
    })
}

const onSelectSprint = async (selected: SprintSel) => {
    activeDrawer.value = null
    sprint.value = selected
    tasks.value = []
    fetchSprintTasksT.execute().then(items => {
        if (items) tasks.value = items;
    })
}

const onTaskCreate = async (id: string) => {
    if (!sprint.value) return null;
    await gql.mutation({
        assignTaskToSprint: {
            __args: {
                taskId: id,
                sprintId: throwIfN(sprint.value.id),
            },
            success: true
        }
    });
    await fetchLatestSprintT.execute();
}
</script>

<style scoped lang="sass">
.sb-header
    background: var(--uchu-yin-2)
    padding: 0.5rem
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.05)

.sb-tasks-cols
    padding: 1rem
    background: var(--uchu-gray-2)
    height: calc(100vh - 50px - 2rem)
    width: calc(100% - 2rem)
    display: flex
    align-items: stretch
    gap: 10px

.sb-task-col
    background: var(--uchu-gray-1)
    border-radius: 4px
    flex-grow: 1
    flex-shrink: 1
    border: 1px solid #ddd
    vertical-align: top
    padding: 1rem
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.05)
</style>
