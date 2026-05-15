<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default:null,
    },
    description:  {
      type: String,
      default:null,
    },
  })

</script>

<template>
  <div class="border rounded bg-card p-4">
    <h2 v-if="title"><strong>{{ title }}</strong></h2>
    <p v-if="description" class="text-muted-foreground uppercase text-xs">{{ description }}</p>
    <slot/>
  </div>
</template>

<style scoped>

</style>