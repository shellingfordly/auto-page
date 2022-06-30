<script lang="ts" setup>
import type { SlideshowSchema, CarouselAutoPlayConfig } from "@/types";
import { SchemaStore } from "@/store/modules/template";
import ControlItem from "./ControlItem.vue";
import {
  IndicatorTypeMap,
  IndicatorPositionMap,
  DirectionMap,
  AnimationNameMap,
} from "@/constants";

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
  <ControlItem title="方向">
    <a-radio-group type="button" v-model="schema.config.direction">
      <a-radio v-for="(v, k) in DirectionMap" :key="k" :value="k">
        {{ v }}
      </a-radio>
    </a-radio-group>
  </ControlItem>
  <ControlItem title="动画">
    <a-radio-group type="button" v-model="schema.config.animationName">
      <a-radio v-for="(v, k) in AnimationNameMap" :key="k" :value="k">
        {{ v }}
      </a-radio>
    </a-radio-group>
  </ControlItem>
  <ControlItem title="移动速度(ms)">
    <a-input-number
      :class="$style.controlInput"
      v-model="schema.config.moveSpeed"
    />
  </ControlItem>
  <ControlItem title="指示器类型">
    <a-radio-group type="button" v-model="schema.config.indicatorType">
      <a-radio v-for="(v, k) in IndicatorTypeMap" :key="k" :value="k">
        {{ v }}
      </a-radio>
    </a-radio-group>
  </ControlItem>
  <ControlItem title="指示器位置">
    <a-radio-group type="button" v-model="schema.config.indicatorPosition">
      <a-radio v-for="(v, k) in IndicatorPositionMap" :key="k" :value="k">
        {{ v }}
      </a-radio>
    </a-radio-group>
  </ControlItem>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
