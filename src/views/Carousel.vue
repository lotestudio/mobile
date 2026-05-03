<script setup lang="ts">
import { nextTick, ref } from "vue";
import { ChevronLeft, EllipsisVertical } from "lucide-vue-next";
import BackLink from "@/components/BackLink.vue";

function generateLinks(count: number) {
  return Array.from({ length: count }, (_, index) => `Link ${index + 1}`);
}

const links = generateLinks(50);

const activeIndex = ref(0);
const linksCarousel = ref<HTMLElement | null>(null);
const viewsCarousel = ref<HTMLElement | null>(null);

const touchStartX = ref(0);
const isProgrammaticScroll = ref(false);
let programmaticScrollTimeout: ReturnType<typeof setTimeout> | undefined;


function getSlideWidth() {
  const firstSlide = viewsCarousel.value?.children[0] as HTMLElement | undefined;

  return firstSlide?.offsetWidth ?? viewsCarousel.value?.clientWidth ?? 0;
}

function getCenteredSlideScrollLeft(index: number) {
  if (!viewsCarousel.value) return 0;

  const slideWidth = getSlideWidth();
  const carouselWidth = viewsCarousel.value.clientWidth;

  return slideWidth * index - (carouselWidth - slideWidth) / 2;
}


function scrollActiveLinkIntoView(index: number) {
  nextTick(() => {
    const activeLink = linksCarousel.value?.children[index] as HTMLElement | undefined;

    activeLink?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  });
}

function setActiveIndex(index: number) {
  activeIndex.value = index;
  scrollActiveLinkIntoView(index);
}

function finishProgrammaticScroll() {
  window.clearTimeout(programmaticScrollTimeout);

  programmaticScrollTimeout = window.setTimeout(() => {
    isProgrammaticScroll.value = false;
  }, 800);
}

function onViewsScroll() {
  if (!viewsCarousel.value || isProgrammaticScroll.value) return;

  const carousel = viewsCarousel.value;
  const slideWidth = getSlideWidth();

  if (!slideWidth) return;

  const centeredScrollLeft = carousel.scrollLeft + (carousel.clientWidth - slideWidth) / 2;
  const index = Math.round(centeredScrollLeft / slideWidth);

  if (index !== activeIndex.value) {
    setActiveIndex(index);
  }
}

function goToSlide(index: number) {
  if (!viewsCarousel.value) return;

  const normalizedIndex = Math.max(0, Math.min(index, links.length - 1));

  isProgrammaticScroll.value = true;
  setActiveIndex(normalizedIndex);

  viewsCarousel.value.scrollTo({
    left: getCenteredSlideScrollLeft(normalizedIndex),
    behavior: "smooth",
  });

  finishProgrammaticScroll();
}

function onViewTouchStart(event: TouchEvent) {
  touchStartX.value = event.touches[0]?.clientX ?? 0;
}

function onViewTouchEnd(event: TouchEvent) {
  const touchEndX = event.changedTouches[0]?.clientX ?? 0;
  const deltaX = touchStartX.value - touchEndX;
  const swipeThreshold = 40;

  if (Math.abs(deltaX) < swipeThreshold) return;

  const direction = deltaX > 0 ? 1 : -1;

  goToSlide(activeIndex.value + direction);
}
</script>

<template>
  <div class="flex flex-col">
    <header class="p-4 flex justify-between shrink-0">
      <BackLink class="w-1/6 flex justify-start">
        <ChevronLeft class="size-6" />
      </BackLink>
      <div class="flex-1 text-center">Product</div>
      <div class="w-1/6 flex justify-end">
        <EllipsisVertical class="size-6" />
      </div>
    </header>

    <div ref="linksCarousel" class="carousel">
      <button
          v-for="(link, index) in links"
          :key="link"
          type="button"
          class="swipe-links"
          :class="{ active: activeIndex === index }"
          @click="goToSlide(index)"
      >
        {{ link }}
      </button>
    </div>

    <div
        ref="viewsCarousel"
        class="carousel views-carousel flex-1"
        @scroll="onViewsScroll"
        @touchstart.passive="onViewTouchStart"
        @touchend.passive="onViewTouchEnd"
    >
      <div
          v-for="(_, index) in links"
          :key="index"
          class="swipe-view"
      >
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  background: var(--background);
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
}

.views-carousel {
  overflow-x: hidden;
  scroll-snap-type: none;
  touch-action: pan-y;
}

.swipe-view {
  scroll-snap-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: var(--primary);
}


@media (min-width: 768px) {
  .swipe-view {
    width: calc(100% / 3);
  }
}


.swipe-links {
  scroll-snap-align: center;
  padding-inline: 2rem;
  padding-block: 1rem;
  flex: 0 0 auto;
  white-space: nowrap;
  color: var(--muted-foreground);
  transition: color 0.2s ease;
}

.swipe-links.active {
  color: var(--primary);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.5rem;
}
</style>