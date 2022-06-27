<script lang="ts" setup>
import { SlideshowSchema } from "@/schemas";

defineProps<{ schema: SlideshowSchema }>();

function onClick(image: any) {
  image.link && window.open(image);
}
</script>

<template>
  <BorderContainer :schema="schema">
    <div :class="$style.container">
      <a-carousel
        :style="{
          width: '100%',
          height: '300px',
        }"
        :default-current="2"
      >
        <a-carousel-item v-for="image in schema.list">
          <img
            :src="image.url"
            :style="{
              width: '100%',
            }"
            @click="onClick(image)"
          />
        </a-carousel-item>
      </a-carousel>
    </div>
  </BorderContainer>
</template>

<style module scoped lang="less">
.container {
  width: 100%;
  height: 300px;
  text-align: center;
  line-height: 300px;
  border: 1px solid #eee;
}
</style>
