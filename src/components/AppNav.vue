<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
  <transition name="slide-up">
  <nav class="w-full absolute bottom-0 flex justify-around px-1.5 py-3 shrink-0 text-xs bg-secondary" v-show="route.meta.nav">
    <slot />
  </nav>
  </transition>
</template>

<style scoped>

</style>