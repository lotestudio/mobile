<script setup lang="ts">
import {nextTick, onMounted, ref, watch, type Component} from "vue";

interface CarouselView {
  label: string;
  component: Component;
  props?: Record<string, unknown>
}

const props = defineProps<{
  views: CarouselView[];
  active: number
}>()

const activeIndex = ref(props.active ?? 0);
const linksCarousel = ref<HTMLElement | null>(null);
const viewsCarousel = ref<HTMLElement | null>(null);

const touchStartX = ref(0);
const touchCurrentX = ref(0);
const touchStartScrollLeft = ref(0);
const isDraggingView = ref(false);
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
    setTimeout(()=>{
      activeLink?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      })

    },80)
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

  const normalizedIndex = Math.max(0, Math.min(index, props.views.length - 1));

  isProgrammaticScroll.value = true;
  setActiveIndex(normalizedIndex);

  viewsCarousel.value.scrollTo({
    left: getCenteredSlideScrollLeft(normalizedIndex),
    behavior: "smooth",
  });

  finishProgrammaticScroll();
}

function onViewTouchStart(event: TouchEvent) {
  const carousel = viewsCarousel.value;

  if (!carousel) return;

  touchStartX.value = event.touches[0]?.clientX ?? 0;
  touchCurrentX.value = touchStartX.value;
  touchStartScrollLeft.value = carousel.scrollLeft;
  isDraggingView.value = true;

  carousel.style.scrollBehavior = "auto";
}

function onViewTouchMove(event: TouchEvent) {
  const carousel = viewsCarousel.value;
  const threshold = 30;

  if (!carousel || !isDraggingView.value) return;

  touchCurrentX.value = event.touches[0]?.clientX ?? touchStartX.value;

  const deltaX = touchStartX.value - touchCurrentX.value;

  if(Math.abs(deltaX)>threshold)
  {
    carousel.scrollLeft = touchStartScrollLeft.value + deltaX - (threshold*Math.sign(deltaX));
  }
}

function onViewTouchEnd(event: TouchEvent) {
  const carousel = viewsCarousel.value;

  if (!carousel) return;

  const touchEndX = event.changedTouches[0]?.clientX ?? touchCurrentX.value;
  const deltaX = touchStartX.value - touchEndX;
  const swipeThreshold = 60;

  isDraggingView.value = false;
  carousel.style.scrollBehavior = "";

  if (Math.abs(deltaX) < swipeThreshold) {
    goToSlide(activeIndex.value);
    return;
  }

  const direction = deltaX > 0 ? 1 : -1;

  goToSlide(activeIndex.value + direction);
}

watch(
  activeIndex,
  (value, oldValue, onCleanup) => {

    nextTick(() => {
      const carousel = linksCarousel.value;
      const activeLink = carousel?.children[value] as HTMLElement | undefined;
      const oldLink = carousel?.children[oldValue ?? 0] as HTMLElement | undefined;

      if (!carousel || !activeLink || !oldLink) return;
      const newTabWidth = activeLink.offsetWidth/carousel.offsetWidth;
      const newTabPosition = oldLink?.compareDocumentPosition(activeLink);

      let transitionWidth=0;
      //to right
      if(newTabPosition ===4){
        transitionWidth = activeLink.offsetLeft + activeLink.offsetWidth  - oldLink.offsetLeft ;
      }

      //to left
      if(newTabPosition ===2){
        transitionWidth = oldLink.offsetLeft + oldLink.offsetWidth  - activeLink.offsetLeft;
        carousel.style.setProperty("--_left", `${activeLink.offsetLeft}px`);
      }

      carousel.style.setProperty("--_width", transitionWidth /carousel.offsetWidth+'');

      setTimeout(()=>{
        carousel.style.setProperty("--_left", `${activeLink.offsetLeft}px`);
        carousel.style.setProperty("--_width", newTabWidth+'');
      },220)

    });
  },
    {immediate:true}
)


onMounted(()=>{

  const lCarousel = linksCarousel.value;
  const activeLink = lCarousel?.children[activeIndex.value] as HTMLElement | undefined;

  if(!activeLink || !lCarousel) return;

  const newTabWidth = activeLink.offsetWidth/lCarousel.offsetWidth;
  lCarousel.style.setProperty("--_left", `${activeLink.offsetLeft}px`);
  lCarousel.style.setProperty("--_width", newTabWidth+'');

  lCarousel.style.scrollBehavior = "auto";
  lCarousel.scrollLeft=activeLink.offsetLeft-lCarousel.offsetWidth/2
  lCarousel.style.scrollBehavior = "";

  const vCarousel = viewsCarousel.value;

  if (!vCarousel) return;

  vCarousel.style.scrollBehavior = "auto";
  vCarousel.scrollLeft = getCenteredSlideScrollLeft(activeIndex.value);
  vCarousel.style.scrollBehavior = "";

});
</script>

<template>
  <div class="flex flex-col flex-1 overflow-hidden">
    <div ref="linksCarousel" class="carousel carousel-links border-b border-b-border">
      <button
          v-for="(view, index) in views"
          :key="view.label"
          type="button"
          class="swipe-links"
          :class="{ active: activeIndex === index }"
          @click="goToSlide(index)"
      >
        {{ view.label }}
      </button>
    </div>

    <div
        ref="viewsCarousel"
        class="carousel views-carousel flex-1"
        @scroll="onViewsScroll"
        @touchstart.passive="onViewTouchStart"
        @touchmove.passive="onViewTouchMove"
        @touchend.passive="onViewTouchEnd"
    >
      <div
          v-for="(view, index) in views"
          :key="view.label"
          class="swipe-view"
      >
        <component :is="view.component" v-bind="view.props"/>
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

.carousel-links{
  position:relative;
  background: var(--card);
}

.carousel-links::after{
  position:absolute;
  content: '';
  left:0;
  right: 0;
  bottom: 0;
  height: 1px;
  scale:var(--_width,10%) 1;
  translate: var(--_left, 0px) 0;
  transform-origin: left;
  transition: scale 200ms, translate 200ms;
  background: var(--accent);
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
  flex: 0 0 auto;
  color: var(--primary);
  overflow-x: hidden;
  overflow-y: auto;
}


@media (min-width: 768px) {
  .swipe-view {
    width: calc(100% / 3);
  }
}


.swipe-links {
  scroll-snap-align: center;
  padding-inline: 2rem;
  padding-bottom: 0.5rem;
  flex: 0 0 auto;
  white-space: nowrap;
  color: var(--muted-foreground);
  transition: color 0.2s ease;
}

.swipe-links.active {
  color: var(--primary);
  font-weight: 600;
}
</style>