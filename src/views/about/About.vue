<script lang="ts" setup>
import { useBoxDraggable } from "@/hooks/useBoxDraggable";

const dragRef = ref();
const boxElement = ref();

const { position } = useBoxDraggable(dragRef, { boxElement });
</script>

<template>
  <div class="box" ref="boxElement">
    <div
      class="item"
      ref="dragRef"
      :style="{ left: position.x + 'px', top: position.y + 'px' }"
    >
      xxxx
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid red;
  margin: 50px auto;

  .item {
    position: absolute;
    width: 50px;
    height: 50px;
    text-align: center;
    background-color: blue;
    cursor: pointer;
  }
}
</style>
