<script lang="ts" setup>
import { SlideshowSchema } from "@/schemas";

const props = defineProps<{ schema: SlideshowSchema }>();
const style = computed(() => props.schema.getStyle);

function onClick(image: any) {
  image.link && window.open(image);
}
</script>

<template>
  <BorderContainer :schema="schema">
    <div :style="style">
      <a-carousel
        :style="{
          width: '100%',
          height: '100%',
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
