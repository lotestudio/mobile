<template>
  <div class="">
    <Transition name="slide-rotate-up">
      <div v-if="!dark" class="absolute">
        <MoonStar class="size-6" />
      </div>
      <div v-else class="absolute">
        <Sun class="size-6" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import {Sun, MoonStar } from 'lucide-vue-next'

defineProps({
  dark: Boolean
})

</script>


<style scoped>
.slide-rotate-up-enter-active,
.slide-rotate-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-rotate-up-enter-from {
  opacity: 0;
  transform: translateY(20px) rotate(-120deg);
}

.slide-rotate-up-leave-to {
  opacity: 0;
  transform: translateY(-20px) rotate(120deg);
}
</style>