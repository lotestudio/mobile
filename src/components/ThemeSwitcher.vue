<template>
  <div class="relative text-shade-100 text-primary">
    <Transition name="slide-up">

      <div v-if="!dark" @click="toggle" class="i-moon absolute text-xl">1</div>
      <div v-else @click="toggle" class="i-sun absolute text-xl">2</div>

    </Transition>
  </div>
</template>

<script setup>
import {ref} from 'vue'
//init
let dark=ref(!!localStorage.getItem('dark') || false)
if(dark.value){
  document.getElementsByTagName("html")[0].classList.add("dark");
}

//toggle
let toggle=()=>{
  dark.value=!dark.value;
  setTimeout(()=>{
    document.getElementsByTagName("html")[0].classList.toggle("dark");

    if(dark.value){
      localStorage.setItem('dark','dark')
    }else{
      localStorage.removeItem('dark')
    }
  }, 250)
}
</script>


<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px) rotate(-120deg);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px) rotate(120deg);
}
</style>