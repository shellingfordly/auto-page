<script lang="ts" setup>
const emit = defineEmits(["change-text", "update:value"]);
defineProps<{ value: string }>();

function onChange(value: string) {
  emit("update:value", value);
  emit("change-text", value);
}
</script>

<template>
  <div :class="$style.textControl">
    <span :class="$style.controlItemLabel">文本内容</span>
    <a-input :model-value="value" @input="onChange" />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";

.textControl {
  display: flex;
  align-items: center;
  .controlItemLabel {
    width: 100px;
  }
}
</style>
