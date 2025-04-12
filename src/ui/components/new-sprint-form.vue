<template lang="pug">
n-form
    n-form-item(label="Title")
        n-input(v-model:value="sprintInput.title")
    n-form-item(label="Starts At")
        n-date-picker(v-model:value="sprintInput.startTS")
    n-form-item
        n-button(@click="handleSubmit")
            | Submit
</template>

<script setup lang="ts">
import { NForm, NButton, NFormItem, NInput, NDatePicker } from 'naive-ui';
import { useAsyncState  } from '@vueuse/core';
import { ref } from 'vue';
import { type SprintInput } from '../api-client';
import { useGQLClient } from '../api-client/use-client';

const gql = useGQLClient();

const emit = defineEmits<{
    success: [sprintId: string]
}>();

const sprintInput = ref<SprintInput>({
    title: "",
    startTS: new Date()
});

const submitSprintT = useAsyncState(
    async () => {
        return gql.mutation({
            createSprint: {
                __args: {
                    sprint: sprintInput.value
                },
                id: true
            }
        })
    },
    null,
    { immediate: false }
)

const handleSubmit = async () => {
    const res = await submitSprintT.execute();
    const id = res?.createSprint?.id
    if (!id) return
    emit("success", id)
}
</script>

<style lang="sass">
</style>