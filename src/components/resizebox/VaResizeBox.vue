<template>
  <a-resize-box v-bind="$attrs">
    <div style="height: 100%; overflow: auto">
      <slot />
    </div>
  </a-resize-box>
</template>
