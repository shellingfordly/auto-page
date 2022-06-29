<script lang="ts" setup>
import type { StyleKeys, StyleEmitItem } from "@/types";
import StyleValue from "./components/StyleValue.vue";
import { BaseStyle } from "@/schemas";
import { isFunction } from "lodash";
import { FilterStyleValue } from "@/constants";

const emit = defineEmits(["change-style"]);
const props = defineProps<{
  style: BaseStyle;
}>();

const defaultStyle = new BaseStyle();
const baseStyle = computed(() => {
  defaultStyle.initValue(props.style);
  const result: Record<StyleKeys, StrOrNum> = {} as any;
  const keys = Object.keys(defaultStyle).filter(
    (k) => !FilterStyleValue.includes(k)
  ) as StyleKeys[];
  keys.forEach((key: StyleKeys) => {
    const item = defaultStyle[key];
    if (item !== null && !isFunction(item)) {
      result[key] = item;
    }
  });
  return result;
});

function onChange(item: StyleEmitItem) {
  emit("change-style", item);
}
</script>

<template>
  <div
    :class="$style.controlStyleItem"
    v-for="(value, key) in baseStyle"
    :key="key"
  >
    <div :class="$style.controlItemLabel">
      {{ defaultStyle.getLabel(key) }}：
    </div>
    <StyleValue :value="value" :type="key" @change="onChange($event)" />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
