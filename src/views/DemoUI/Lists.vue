<script setup lang="ts">

import Block from "@/components/Block.vue";
import ListItem from "@/components/ListItem.vue";
import {ChevronLeft, EllipsisVertical, Apple, Armchair, Music} from "lucide-vue-next";
import BackLink from "@/components/BackLink.vue";
import List from "@/components/List.vue";

</script>

<template>

  <div>
    <header class="bg-card p-4 flex justify-between shrink-0">
      <BackLink class="w-1/6 flex justify-start">
        <ChevronLeft class="size-6"/>
      </BackLink>
      <div class="flex-1 text-center">DemoUI: Lists</div>
      <div class="w-1/6 flex justify-end">
        <EllipsisVertical class="size-6"/>
      </div>
    </header>



    <div class="p-4 space-y-4">
      <List>
        <ListItem>List</ListItem>
        <ListItem>List</ListItem>
        <ListItem>List</ListItem>
        <ListItem>List</ListItem>
      </List>
      <hr class="my-4">
      <Block title="List inside block" description="Some list items">
        <div class="py-4 -mx-4 -mb-8">
          <ListItem>List</ListItem>
          <ListItem>List</ListItem>
          <ListItem>List</ListItem>
        </div>
      </Block>
      <hr class="my-4">
      <Block title="List slots" description="Left, right and default">
        <div class="py-4 -mx-4 -mb-8">
          <ListItem>
            <template #left>
                <Apple/>
            </template>
            <template #default>Food</template>
            <template #right>
                <EllipsisVertical/>
            </template>
          </ListItem>
          <ListItem>
            <template #left>
                <Armchair/>
            </template>
            <template #default>Chill</template>
            <template #right>
                <EllipsisVertical/>
            </template>
          </ListItem>
          <ListItem>
            <template #left>
                <Music/>
            </template>
            <template #default>Music</template>
            <template #right>
                <EllipsisVertical/>
            </template>
          </ListItem>

        </div>
      </Block>
      <hr class="my-4">
      <Block title="List links" description="Left, right and default">
        <div class="py-4 -mx-4 -mb-8">
          <ListItem link>List</ListItem>
          <ListItem link>List</ListItem>
          <ListItem link>List</ListItem>
        </div>
      </Block>
    </div>

  </div>


</template>

<style scoped>

</style>