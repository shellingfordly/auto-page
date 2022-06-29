<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<template>
  <div :class="$style.controlStyleItem">
    <div :class="$style.controlItemLabel">{{ title }}:</div>
    <slot />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
</style>
