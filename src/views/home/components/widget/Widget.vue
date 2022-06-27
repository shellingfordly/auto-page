<script lang="ts" setup>
import { Icon } from "@iconify/vue";

defineProps({
  widget: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div :class="$style.widget">
    <Icon v-if="widget.icon" :icon="widget.icon" height="20" />
    <span :class="$style.name">{{ widget.name }}</span>
  </div>
</template>

<style module scoped lang="less">
.widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  padding: 15px 0;
  text-align: center;
  border: 1px solid var(--color-border);
  cursor: pointer;

  &:hover {
    border-color: rgb(var(--primary-6));
  }

  .name {
    margin-top: 10px;
  }
}
</style>
