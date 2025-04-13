<template lang="pug">
n-list(hoverable, clickable)
    n-list-item(v-for="sprint of sprints")
        n-thing(
            :title="sprint.title ?? ''"
            @click="emit('select', sprint)"
        )
</template>

<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import { NList, NListItem, NThing } from "naive-ui"
import { useGQLClient } from '../api-client/use-client';
import { onMounted, ref } from 'vue';
import { sprintSelection, type SprintSel } from '../api-client/selections';

const pageNum = ref(1)
const sprints = ref<SprintSel[]>([])

const gql = useGQLClient();

const emit = defineEmits<{
    select: [sprint: SprintSel]
}>()

const fetchSprintsT = useAsyncState(async () => {
    const res = await gql.query({
        sprints: {
            __args: {
                filters: {},
                page: { num: pageNum.value }
            },
            items: sprintSelection
        }
    })
    return res.sprints?.items ?? []
}, [], {
    immediate: false
})

onMounted(() => {
    fetchSprintsT.execute().then((items) => {
        sprints.value = items
    });
});
</script>

<style lang="sass">
</style>