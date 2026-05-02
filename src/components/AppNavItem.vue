<script setup lang="ts">

import {Folders} from "lucide-vue-next";

const props = defineProps({
    to:{
      type:String,
      required:true
    },
    label:{
      type:String,
      required:true
    },
    icon:{
      type: Function,
      required: true
    }
});

</script>

<template>
  <RouterLink :to="to" active-class="text-gray-400" class="flex flex-col items-center gap-1.5">
    <component :is="icon" class="size-6" stroke-width="1.5" absolute-stroke-width />
    <div>{{ label }}</div>
  </RouterLink>
</template>

<style scoped>

</style>