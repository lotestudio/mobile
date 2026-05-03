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
        <component :is="Component"
                   :key="route.fullPath"
                   class="route-page"
                   :style="route.meta.nav ? 'padding-bottom: var(--nav-offset)' : ''"
        />
        </transition>
      </router-view>
    </main>

    <AppNav>
      <AppNavItem :icon="Folders" label="Начало" to="/"/>
      <AppNavItem :icon="Folders" label="Клиенти" to="/catalog"/>
      <AppNavItem :icon="Folders" label="Настройки" to="/settings"/>
      <AppNavItem :icon="MenuSquareIcon" label="Още" to="/more"/>
    </AppNav>
  </div>
</template>
