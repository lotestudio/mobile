<script setup lang="ts">

import {useRoute} from "vue-router";
import BackLink from "@/components/BackLink.vue";
import PageHeader from "@/components/PageHeader.vue";
import {ChevronLeft, EllipsisVertical} from "lucide-vue-next";


const route = useRoute()
</script>



<template>
  <div>
    <header class="p-4 flex justify-between shrink-0">
      <BackLink class="w-1/6 flex justify-start">
        <ChevronLeft class="size-6" />
      </BackLink>
      <div class="flex-1 text-center">Product</div>
      <div class="w-1/6 flex justify-end">
        <EllipsisVertical class="size-6" />
      </div>
    </header>
    <PageHeader title="Name of the Product"/>
  </div>
</template>

<style scoped></style>
