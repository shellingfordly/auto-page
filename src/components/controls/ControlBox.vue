<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.title">{{ title }}</div>
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<style module scoped lang="less">
.container {
  .title {
    padding: 10px;
    background-color: var(--color-fill-1);
  }
  .content {
    padding: 20px;
  }
}
</style>
