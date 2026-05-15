<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import {ChevronLeft, EllipsisVertical} from "lucide-vue-next";
import BackLink from "@/components/BackLink.vue";
import PageSample from "@/views/DemoUI/SampleCarouselPages/PageSample.vue";


const veryLongContent = '' +
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci amet aperiam cupiditate ducimus excepturi exercitationem expedita impedit laudantium magni, minima molestias obcaecati perspiciatis, ullam vitae? Dolorum fugit magnam sed?</p>'+
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci amet aperiam cupiditate ducimus excepturi exercitationem expedita impedit laudantium magni, minima molestias obcaecati perspiciatis, ullam vitae? Dolorum fugit magnam sed?</p>'+
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci amet aperiam cupiditate ducimus excepturi exercitationem expedita impedit laudantium magni, minima molestias obcaecati perspiciatis, ullam vitae? Dolorum fugit magnam sed?</p>'+
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci amet aperiam cupiditate ducimus excepturi exercitationem expedita impedit laudantium magni, minima molestias obcaecati perspiciatis, ullam vitae? Dolorum fugit magnam sed?</p>'+
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci amet aperiam cupiditate ducimus excepturi exercitationem expedita impedit laudantium magni, minima molestias obcaecati perspiciatis, ullam vitae? Dolorum fugit magnam sed?</p>'

const views = [
  {'label': '11.05.26', 'component': PageSample, 'props': {title: 'Title', description:'Description', content:'Hello world'}},
  {'label': '12.05.26', 'component': PageSample, 'props': {title: 'Title', description:'Description', content:'Hello world'}},
  {'label': '13.05.26', 'component': PageSample, 'props': {title: 'Title', description:'Description', content:'Hello world'}},
  {'label': 'Днес', 'component': PageSample, 'props': {title: 'Title', description:'Description', content:veryLongContent}},
  {'label': 'Утре', 'component': PageSample, 'props': {title: 'Title', description:'Description', content:'Hello world'}},
  {'label': '15.05.26', 'component': PageSample, 'props': {title: 'Title', description:'Description', content:'Hello world'}},
  {'label': '16.05.26', 'component': PageSample, 'props': {title: 'Title', description:'Description', content:'Hello world'}},
  {'label': '17.05.26', 'component': PageSample, 'props': {title: 'Title', description:'Description', content:'Hello world'}},
]

</script>

<template>
  <div class="flex h-full flex-col overflow-hidden">
    <header class="bg-card p-4 flex justify-between shrink-0">
      <BackLink class="w-1/6 flex justify-start">
        <ChevronLeft class="size-6"/>
      </BackLink>
      <div class="flex-1 text-center">Demo UI: Carousel View</div>
      <div class="w-1/6 flex justify-end">
        <EllipsisVertical class="size-6"/>
      </div>
    </header>
    <Carousel :views="views" :active="3"/>
  </div>
</template>