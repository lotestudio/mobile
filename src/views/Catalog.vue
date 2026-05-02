<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader title="Catalog"/>
    <div class="px-4">
      <div><router-link to="product/1">Product 1</router-link></div>
      <div><router-link to="product/2">Product 2</router-link></div>
      <div><router-link to="product/3">Product 3</router-link></div>
    </div>


  </div>
</template>

<style scoped></style>
