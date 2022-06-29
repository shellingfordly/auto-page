<script lang="ts" setup>
import { SlideshowSchema } from "@/schemas";

const props = defineProps<{ schema: SlideshowSchema }>();
const style = computed(() => props.schema.getStyle);

function onClick(link?: string) {
  link && window.open(link);
}
</script>

<template>
  <BorderContainer :schema="schema">
    <a-carousel
      :class="$style.carousel"
      :style="style"
      :default-current="2"
      v-bind="schema.config"
    >
      <a-carousel-item v-for="image in schema.list">
        <img
          :class="$style.carouselImg"
          :src="image.url"
          @click="onClick(image.link)"
        />
      </a-carousel-item>
    </a-carousel>
  </BorderContainer>
</template>

<style module scoped lang="less">
.carousel {
  width: 100%;

  &Img {
    width: 100%;
    height: 100%;
  }
}
</style>
