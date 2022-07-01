<script lang="ts" setup>
import { useBoxDraggable } from "@/hooks/useBoxDraggable";
import draggable from "vuedraggable";

const dragRef = ref();
const boxElement = ref();

const { position } = useBoxDraggable(dragRef, { boxElement });

const list = ref([
  { name: "A", id: 0 },
  { name: "B", id: 1 },
  { name: "C", id: 2 },
]);
</script>

<template>
  <div class="box" ref="boxElement">
    <!-- <div
      class="item"
      ref="dragRef"
      :style="{ left: position.x + 'px', top: position.y + 'px' }"
    >
      xxxx
    </div> -->
    <draggable
      :list="list"
      item-key="name"
      class="list-group"
      ghost-class="ghost"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
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

.list-group-item {
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: blue;
}
</style>
