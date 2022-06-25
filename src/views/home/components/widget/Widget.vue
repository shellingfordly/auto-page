<script lang="ts" setup>
defineProps({
  widget: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div :class="$style.widget">
    {{ widget.name }}
  </div>
</template>

<style module scoped lang="less">
.widget {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  cursor: pointer;
}
</style>
