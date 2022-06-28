<script lang="ts" setup>
import type { StyleKeys, StyleEmitItem } from "@/types";
import StyleValue from "./components/StyleValue.vue";
import { BaseStyle } from "@/schemas";
import { isFunction } from "lodash";

const emit = defineEmits(["change-style"]);
const props = defineProps<{
  style: BaseStyle;
}>();

const defaultStyle = new BaseStyle();
const baseStyle = computed(() => {
  defaultStyle.setStyleValue(props.style);
  const result: Record<StyleKeys, UndOf<StrOrNum>> = {} as any;
  const keys = Object.keys(defaultStyle) as StyleKeys[];
  keys.forEach((key: StyleKeys) => {
    const item = defaultStyle[key];
    if (item !== undefined && !isFunction(item)) {
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
  <div>
    <div :class="$style.item" v-for="(value, key) in baseStyle" :key="key">
      <div :class="$style.controlItemLabel">
        {{ defaultStyle.getLabel(key) }}：
      </div>
      <StyleValue
        :value="(value as StrOrNum)"
        :type="key"
        @change="onChange($event)"
      />
    </div>
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  .controlItemLabel {
    width: 70px;
  }

  .slider {
    width: 80px;
  }

  .input {
    width: 70px;
  }
}
</style>
