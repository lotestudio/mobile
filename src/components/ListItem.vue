<script setup lang="ts">

import {ChevronRight } from 'lucide-vue-next'

  const props = defineProps({
    link:{
      type: Boolean,
      default: false
    },
    to:{
      type: String,
      default: ''
    }
  })

</script>

<template>
  <component :is="link ? 'RouterLink' : 'div'"
             :to="to"
             class="border-b py-4 px-4 last:border-none flex gap-2 group active:bg-muted transition-colors transition-duration-700"
  >
    <div class="group-active:-translate-x-1 transition-transform transition-duration-700">
      <slot name="left"/>
    </div>
    <div class="flex-1 group-active:scale-105 origin-left transition-transform transition-duration-700"><slot/></div>

    <div v-if="link" class="group-active:translate-x-1 transition-transform transition-duration-700">
      <ChevronRight class="text-muted-foreground"/>
    </div>

    <div v-else class="group-active:translate-x-1 transition-transform transition-duration-700">
      <slot name="right"/>
    </div>
  </component>
</template>

<style scoped>

</style>