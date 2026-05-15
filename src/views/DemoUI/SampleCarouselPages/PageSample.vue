<script setup lang="ts">
import Block from "@/components/Block.vue";

defineProps({
    title: String,
    description: String,
    content: String
})

</script>

<template>
  <div class="p-4">
    <Block :title="title" :description="description" />
    <div v-html="content" class="py-4"/>
  </div>
</template>

<style scoped>

</style>