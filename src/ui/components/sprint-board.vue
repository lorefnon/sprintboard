<template lang="pug">
.header
    .app-title Sprint Board
    .sprint-title {{ sprint?.title }}
    .spacer
    n-popover(
        placement="bottom"
        trigger="click"
    )
        template(#trigger)
            n-button(type="primary") New Sprint

        new-sprint-form(
            @success="onSprintCreate"
        )
    n-popover(
        v-if="sprint"
        placement="bottom"
        trigger="click"
    )
        template(#trigger)
            n-button(type="primary") New Task

        new-task-form(
            @success="onTaskCreate"
        )
table.tasks-table
    thead
        tr
            th PENDING
            th ONGOING
            th COMPLETE
    tbody
        tr
            td(v-for="status in allStatus")
                task-card(
                    v-for="t in groupedTasks[status]"
                    :task="t"
                )
</template>

<script setup lang="ts">
import { useAsyncState } from "@vueuse/core";
import { type Client } from "../api-client"
import { computed, inject, onMounted, ref } from "vue";
import TaskCard from "./task-card.vue"
import { throwIfN } from "../../server/utils/coercions";
import { groupBy } from "remeda";
import { NButton, NPopover } from "naive-ui"
import NewSprintForm from "./new-sprint-form.vue";
import NewTaskForm from "./new-task-form.vue";
import { sprintWithTasksSelection, type TaskSel, type SprintSel } from "../api-client/selections";

const gql = throwIfN(inject<Client>("gql"))

const sprint = ref<SprintSel | null>(null)
const tasks = ref<TaskSel[]>([]);

const fetchLatestSprintQ = useAsyncState(() =>
    gql.query({ latestSprint: sprintWithTasksSelection }),
    null,
    { immediate: false }
)

onMounted(() => {
    fetchLatestSprintQ.execute().then(s => {
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

const onSprintCreate = async (id: string) => {
    fetchLatestSprintQ.execute();
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
    await fetchLatestSprintQ.execute();
}
</script>

<style scoped lang="sass">
.header
    background: #bed8eb
    padding: 20px
    display: flex
    gap: 1rem

.spacer
    flex-grow: 1

.tasks-table
    height: calc(100vh - 80px)
    width: 100vh

    td
        border-left: 1px solid #ddd
        vertical-align: top
</style>
