<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import PageHeader from "@/components/PageHeader.vue";
import Block from "@/components/Block.vue";
import ListItem from "@/components/ListItem.vue";
import {useTheme} from "@/composable/useTheme.ts";


const {toggle,dark} = useTheme();

</script>

<template>
  <div>
    <PageHeader title="Настройки"/>
    <div class="px-4 pb-4">
      <Block title="General" description="Customize settings" class="mt-8">
        <div class="py-4 -mx-4 -mb-8">
          <ListItem @click="toggle">
            <template #default>
              Theme Switcher
            </template>
            <template #right>
              <div class="size-6">
                <ThemeSwitcher :dark="dark"/>
              </div>
            </template>
          </ListItem>
          <ListItem>List</ListItem>
          <ListItem>List</ListItem>
          <ListItem>List</ListItem>
        </div>
      </Block>

      <Block title="UI" description="Components" class="mt-8">
        <div class="py-4 -mx-4 -mb-8">
          <ListItem link to="/demo_ui/carousel">Carousel</ListItem>
          <ListItem link to="/demo_ui/blocks">Blocks</ListItem>
          <ListItem link to="/demo_ui/lists">Lists</ListItem>
        </div>
      </Block>
    </div>
  </div>
</template>

<style scoped></style>
