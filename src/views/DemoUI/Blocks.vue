<script setup lang="ts">

import Block from "@/components/Block.vue";
import ListItem from "@/components/ListItem.vue";
import {ChevronLeft, EllipsisVertical} from "lucide-vue-next";
import BackLink from "@/components/BackLink.vue";
</script>

<template>

  <div>
    <header class="bg-card p-4 flex justify-between shrink-0">
      <BackLink class="w-1/6 flex justify-start">
        <ChevronLeft class="size-6"/>
      </BackLink>
      <div class="flex-1 text-center">DemoUI: Blocks</div>
      <div class="w-1/6 flex justify-end">
        <EllipsisVertical class="size-6"/>
      </div>
    </header>

    <div class="p-4 space-y-4">

      <Block title="Simple Block" description="Description text">
        <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, numquam.</p>
      </Block>

      <Block title="Block with List" description="Some list items" class="mt-8">
        <div class="py-4 -mx-4 -mb-8">
          <ListItem>List</ListItem>
          <ListItem>List</ListItem>
          <ListItem>List</ListItem>
        </div>
      </Block>
    </div>

  </div>


</template>

<style scoped>

</style>