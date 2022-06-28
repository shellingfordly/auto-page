<script lang="ts" setup>
import type { StyleKeys, StyleEmitItem } from "@/types";
import StyleValue from "./components/StyleValue.vue";
import { BaseStyle } from "@/schemas";

const emit = defineEmits(["change-style"]);
const props = defineProps<{
  style: BaseStyle;
}>();

const baseStyle = computed<BaseStyle>(() => {
  return new BaseStyle(props.style);
});

function onChange(item: StyleEmitItem) {
  emit("change-style", item);
}
</script>

<template>
  <div>
    <div :class="$style.item" v-for="(value, key) in baseStyle" :key="key">
      <div :class="$style.controlItemLabel">
        {{ baseStyle.getLabel(key) }}：
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
