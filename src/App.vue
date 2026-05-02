<script setup lang="ts">
  import {Folders, MenuSquareIcon} from 'lucide-vue-next'
  import AppNav from "@/components/AppNav.vue";
  import AppNavItem from "@/components/AppNavItem.vue";

</script>

<template>
  <div class="app-shell">
    <main class="app-main">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition as string">
        <component :is="Component" :key="route.fullPath" class="route-page" />
        </transition>
      </router-view>
    </main>

    <AppNav>
      <AppNavItem :icon="Folders" label="Home" to="/"/>
      <AppNavItem :icon="Folders" label="Catalog" to="/catalog"/>
      <AppNavItem :icon="Folders" label="Settings" to="/settings"/>
      <AppNavItem :icon="MenuSquareIcon" label="More" to="/more"/>
    </AppNav>
  </div>
</template>
