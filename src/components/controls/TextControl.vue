<script lang="ts" setup>
defineEmits(["change-text"]);
defineProps<{ modelValue: string }>();
</script>

<template>
  <div :class="$style.textControl">
    <span :class="$style.controlItemLabel">文本内容</span>
    <a-input
      :model-value="modelValue"
      @input="(val) => $emit('change-text', val)"
    />
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
