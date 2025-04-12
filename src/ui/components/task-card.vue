<script setup lang="ts">
import type { TaskSel } from '../api-client/selections';

defineProps<{ task: TaskSel }>()
</script>

<template lang="pug">
.card
    header {{ task.title }}
</template>

<style scoped lang="sass">
.card
    padding: 10px
    border: 1px solid #ddd
</style>
