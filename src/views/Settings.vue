<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader title="Настройки"/>
    <div class="p-4">
      <div class="px-4 h-8">
        <ThemeSwitcher/>
      </div>
      <div>
        <router-link to="/carousel">Carousel</router-link>
      </div>
      <hr class="my-8">
      <div class="border rounded bg-card p-4">
        <strong>Block</strong>
        <p class="text-muted-foreground uppercase text-xs">Description text</p>
        <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, numquam.</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
