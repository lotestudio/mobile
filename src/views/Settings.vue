<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader title="Settings"/>
    <div class="px-4 h-8">
      <ThemeSwitcher/>
    </div>
    <div>
      <router-link to="/carousel">Carousel</router-link>
    </div>
  </div>
</template>

<style scoped></style>
