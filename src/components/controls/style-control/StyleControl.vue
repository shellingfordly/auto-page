<script lang="ts" setup>
import type { StyleKeys, StyleEmitItem, StyleType } from "@/types";
import StyleValue from "./components/StyleValue.vue";
import { BaseStyle, getLabel } from "@/schemas";
import { isFunction } from "lodash";
import { FilterStyleValue } from "@/constants";
import { SchemaStore } from "@/store/modules/template";

const schema = SchemaStore();
const defaultStyle = computed(() => schema.selectedSchema?.style as any);
const baseStyle = computed<StyleType>(() => {
  const style = unref(defaultStyle);
  const keys = Object.keys(style).filter(filterFunc);
  return keys.reduce((p, n) => {
    p[n] = style[n];
    return p;
  }, {} as any);
});

// 筛选需要显示设置的style属性
function filterFunc(k: string) {
  const item = unref(defaultStyle)[k as StyleKeys];
  const valueIsDisplay = !FilterStyleValue.includes(k);
  const isNull = item === null;
  const isFunc = !isFunction(item);
  return valueIsDisplay && !isNull && isFunc;
}

function onChange(item: StyleEmitItem) {
  unref(defaultStyle).setValue(item.key, item.value);
}
</script>

<template>
  <div
    :class="$style.controlStyleItem"
    v-for="(value, key) in baseStyle"
    :key="key"
  >
    <div :class="$style.controlItemLabel">
      {{ getLabel(defaultStyle, key) }}：
    </div>
    <StyleValue :value="value" :type="key" @change="onChange($event)" />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
