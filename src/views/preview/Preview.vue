<script lang="ts" setup>
import draggable from "vuedraggable";

const contents = ref([
  { name: "Edgard", id: 6 },
  { name: "Johnson", id: 7 },
]);

function dragover() {
  console.log("dragover");
}

function dragend() {
  console.log("dragend");
  // contents.value.push(i++);
}

function dragenter() {
  console.log("dragenter");
}

let i = 0;
function dragleave(e: any) {
  console.log("dragleave", e);
}
function onChange(evt: any) {
  console.log("preview", evt);
}
</script>

<template>
  <a-layout-content :class="$style.preview">
    <div :class="$style.previewContent">
      <draggable
        :class="$style.draggable"
        :list="contents"
        @change="onChange"
        group="people"
        item-key="id"
      >
        <template #item="{ element }">
          <div :class="$style.compItem">{{ element.name }}</div>
        </template>
      </draggable>
    </div>
  </a-layout-content>
</template>

<style module scoped lang="less">
.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;

  .previewContent {
    width: 800px;
    height: 800px;
    background-color: #fff;
    overflow-y: auto;

    .draggable {
      overflow: hidden;
    }
  }
}

.compItem {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
}
</style>
