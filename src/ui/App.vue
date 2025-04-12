<script setup lang="ts">
import SprintBoard from './components/sprint-board.vue'
import { createClient } from "./api-client"
import { provide } from 'vue';

provide("gql", createClient({
    url: "/graphql"
}))
</script>

<template lang="pug">
sprint-board
</template>
