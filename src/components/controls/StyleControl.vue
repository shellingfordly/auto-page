<script lang="ts" setup>
import type { StyleKeys, StyleListItem, CSSProperties } from "@/types";
import { STYLE_MAP } from "@/constants";

const props = defineProps<{
  style: CSSProperties;
}>();

const styleList = computed(() => {
  const style = props.style;
  const list: StyleListItem[] = [];
  Object.keys(style).forEach((key) => {
    list.push({
      label: STYLE_MAP[key as StyleKeys],
      value: key as StyleKeys,
    });
  });
  return list;
});
</script>

<template>
  <div class="container">
    <div :class="$style.item" v-for="style in styleList">
      <span :class="$style.controlItemLabel">{{ style.label }}：</span>
      <span>100px</span>
    </div>
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";

.item {
  padding-bottom: 20px;
}
</style>
