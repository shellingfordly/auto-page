<script lang="ts" setup></script>

<template>
  <a-resize-box v-bind="$attrs">
    <template #resize-trigger="{ direction }">
      <div
        :class="[
          $style[`resizebox-demo`],
          $style[
            `resizebox-demo-${
              direction === 'right' ? 'vertical' : 'horizontal'
            }`
          ],
        ]"
      >
        <div :class="$style['resizebox-demo-line']" />
      </div>
    </template>
    <slot />
  </a-resize-box>
</template>

<style module scoped lang="less">
.resizebox-demo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-2);
}
.resizebox-demo::before,
.resizebox-demo::after {
  width: 6px;
  height: 6px;
  border: 1px solid rgb(var(--arcoblue-6));
  content: "";
}
.resizebox-demo-line {
  flex: 1;
  background-color: rgb(var(--arcoblue-6));
}
.resizebox-demo-vertical {
  flex-direction: column;
}
.resizebox-demo-vertical .resizebox-demo-line {
  width: 1px;
  height: 100%;
}
.resizebox-demo-horizontal .resizebox-demo-line {
  height: 1px;
}
</style>
