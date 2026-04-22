<script setup lang="ts">
  import {Folders, MenuSquareIcon} from 'lucide-vue-next'

</script>

<template>
  <div class="app-shell">
    <main class="app-main">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition">
        <component :is="Component" :key="route.fullPath" class="route-page" />
        </transition>
      </router-view>
    </main>

    <nav class="app-nav flex justify-around px-1.5 py-2.5 shrink-0 text-sm">
      <RouterLink to="/" active-class="text-gray-400" class="flex flex-col items-center gap-2">
        <Folders class="size-6" />
        <div>Matches</div>
      </RouterLink>
      <RouterLink to="/catalog" active-class="text-gray-400" class="flex flex-col items-center gap-2">
        <Folders class="size-6" />
        <div>News</div>
      </RouterLink>
      <RouterLink to="/settings" active-class="text-gray-400" class="flex flex-col items-center gap-2">
        <Folders class="size-6" />
        <div>Leagues</div>
      </RouterLink>
      <RouterLink to="/settings" active-class="text-gray-400" class="flex flex-col items-center gap-2">
        <Folders class="size-6" />
        <div>Following</div>
      </RouterLink>
      <RouterLink to="/settings" active-class="text-gray-400" class="flex flex-col items-center gap-2">
        <MenuSquareIcon class="size-6" />
        <div>More</div>
      </RouterLink>
    </nav>
  </div>
</template>
