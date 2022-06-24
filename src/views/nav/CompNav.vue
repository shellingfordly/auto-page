<script lang="ts" setup>
import draggable from "vuedraggable";

const compIcons = ref([
  { name: "John", id: 1 },
  { name: "Tom", id: 2 },
  { name: "Bob", id: 3 },
  { name: "Gerard", id: 4 },
]);

watch(compIcons, () => {
  console.log("compIcons", compIcons.value);
});

function onChange(evt: any) {
  console.log("comp", evt);
}
</script>

<template>
  <a-layout-sider style="height: 100%">
    <draggable
      :class="$style.draggable"
      :list="compIcons"
      @change="onChange"
      group="people"
      item-key="id"
    >
      <template #item="{ element }">
        <div :class="$style.compItem">{{ element.name }}</div>
      </template>
    </draggable>
  </a-layout-sider>
</template>

<style module scoped lang="less">
.draggable {
  padding: 10px;
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
