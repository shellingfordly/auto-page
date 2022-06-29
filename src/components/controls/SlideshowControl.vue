<script lang="ts" setup>
import type { SlideshowSchema, CarouselAutoPlayConfig } from "@/types";
import { SchemaStore } from "@/store/modules/template";
import ControlItem from "./ControlItem.vue";

const schemaStore = SchemaStore();
const schema = computed(() => schemaStore.selectedSchema as SlideshowSchema);
const autoPlay = ref(false);
const autoPlayConfig = computed(
  () => unref(schema).config.autoPlay as CarouselAutoPlayConfig
);

function onChangeAutoPlay(bool: any) {
  if (bool) {
    unref(schema).setConfig("autoPlay", {
      interval: 2000,
    });
  } else {
    unref(schema).setConfig("autoPlay", false);
  }
}
</script>

<template>
  <ControlItem title="自动轮播">
    <a-switch v-model="autoPlay" @change="onChangeAutoPlay" />
  </ControlItem>
  <template v-if="autoPlay">
    <ControlItem title="时间间隔(ms)">
      <a-input-number
        :class="$style.controlInput"
        v-model="autoPlayConfig.interval"
      />
    </ControlItem>
    <ControlItem title="鼠标悬浮暂停">
      <a-switch v-model="autoPlayConfig.hoverToPause" />
    </ControlItem>
  </template>
  <ControlItem title="指示器类型">
    <a-radio-group type="button" v-model="schema.config.indicatorType">
      <a-radio value="left"><icon-align-left /> </a-radio>
      <a-radio value="center"><icon-align-center /></a-radio>
      <a-radio value="right"><icon-align-right /></a-radio>
    </a-radio-group>
  </ControlItem>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
