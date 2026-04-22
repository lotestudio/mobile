<script setup lang="ts"></script>

<template>
  <div class="app-shell">
    <main class="app-main">
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition">
        <component :is="Component" :key="route.fullPath" class="route-page" />
        </transition>
      </router-view>
    </main>

    <nav class="app-nav flex justify-around p-4 shrink-0">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/catalog">Catalog</RouterLink>
      <RouterLink to="/settings">Settings</RouterLink>
    </nav>
  </div>
</template>
