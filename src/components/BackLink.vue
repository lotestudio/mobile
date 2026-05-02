<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();
</script>

<template>
  <div @click="router.back()" class="select-none">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>