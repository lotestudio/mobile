<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();
</script>

<template>
  <div @click="router.back()">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>