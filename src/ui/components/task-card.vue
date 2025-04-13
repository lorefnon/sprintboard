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
    background: white
    border-radius: 4px
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.05)
</style>
