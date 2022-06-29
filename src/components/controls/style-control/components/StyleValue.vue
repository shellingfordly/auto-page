<script lang="ts" setup>
import { StyleKeys, StyleType } from "@/types";
import {
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
} from "@arco-design/web-vue/es/icon";

const emit = defineEmits(["change"]);
const props = defineProps<{ value: StrOrNum; type: StyleKeys }>();
const percent = ref(props.value as any);
function onChange(value: ValueOf<StyleType>) {
  emit("change", { key: props.type, value });
}
</script>

<template>
  <template v-if="type === 'textAlign'">
    <a-radio-group
      type="button"
      :model-value="value"
      :class="$style.group"
      @change="onChange"
    >
      <a-radio value="left"><icon-align-left /> </a-radio>
      <a-radio value="center"><icon-align-center /></a-radio>
      <a-radio value="right"><icon-align-right /></a-radio>
    </a-radio-group>
  </template>
  <template v-else-if="type.toLowerCase().includes('color')">
    <a-input
      v-model="percent"
      :class="$style.input"
      @change="onChange"
      @input="onChange"
    />
  </template>
  <template v-else>
    <a-input-number
      v-model="percent"
      :min="0"
      :max="1000"
      :class="$style.input"
      placeholder="自适应"
      @change="onChange"
      @input="onChange"
    />
  </template>
</template>

<style module scoped lang="less">
.slider {
  width: 80px;
}

.input {
  width: 126px;
}
</style>
