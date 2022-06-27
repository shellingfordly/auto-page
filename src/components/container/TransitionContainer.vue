<script lang="ts" setup>
import { IconLeft } from "@arco-design/web-vue/es/icon";
import { PropType } from "vue";

const props = defineProps({
  position: {
    type: String as PropType<"left" | "right">,
    default: "left",
  },
});
const move = ref(false);
const transitionRef = ref();
const moveStyle = computed(() => {
  if (!transitionRef.value) return {};
  const width = transitionRef.value.offsetWidth;
  return {
    width: width + "px",
    [props.position]: move.value ? -(width - 12) + "px" : 0,
  };
});
const iconStyle = computed(() => {
  if (!transitionRef.value) return {};
  const width = transitionRef.value.offsetWidth;

  return {
    [props.position]: width - 12 + "px",
  };
});
</script>

<template>
  <div
    ref="transitionRef"
    tag="div"
    :class="$style.container"
    :style="moveStyle"
    v-bind="$attrs"
  >
    <div :class="$style.icon" :style="iconStyle" @click="move = !move">
      <icon-left />
    </div>
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<style module scoped lang="less">
.container {
  position: relative;
  display: flex;
  height: 100%;
  transition: all 0.3s;

  .icon {
    position: absolute;
    align-self: center;
    z-index: 10;
    width: 24px;
    height: 24px;
    background-color: var(--color-bg-1);
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid var(--color-border);
  }
  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
