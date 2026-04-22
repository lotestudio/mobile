<script setup lang="ts">

import {useRoute} from "vue-router";
import BackLink from "@/components/BackLink.vue";
const route = useRoute()
</script>



<template>
  <div>
    <header class="app-header p-4 flex justify-between shrink-0">
      <BackLink>
        Back
      </BackLink>
      <div class="flex-1 text-center">App</div>
      <div>R</div>
    </header>
    <h1 class="text-2xl font-bold">Product {{route.params.id}}</h1>
  </div>
</template>

<style scoped></style>
