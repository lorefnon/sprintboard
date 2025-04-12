<template lang="pug">
n-form
    n-form-item(label="Title")
        n-input(v-model:value="taskInput.title")
    n-form-item(label="Starts At")
        n-date-picker(v-model:value="taskInput.expectedEndTs")
    n-form-item
        n-button(@click="handleSubmit")
            | Submit
</template>

<script setup lang="ts">
import { NForm, NButton, NFormItem, NInput, NDatePicker } from 'naive-ui';
import { useAsyncState  } from '@vueuse/core';
import { ref } from 'vue';
import { type TaskInput } from '../api-client';
import { useGQLClient } from '../api-client/use-client';

const gql = useGQLClient();

const emit = defineEmits<{
    success: [taskId: string]
}>();

const taskInput = ref<TaskInput>({
    title: "",
});

const submitSprintT = useAsyncState(
    async () => {
        return gql.mutation({
            createTask: {
                __args: {
                    task: taskInput.value
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
    const id = res?.createTask?.id
    if (!id) return
    emit("success", id)
}
</script>

<style lang="sass">
</style>
