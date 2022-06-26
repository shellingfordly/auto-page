<script lang="ts" setup>
import draggable from "vuedraggable";

const list2 = ref([
  // { name: "cat 5", id: 5 },
  // { name: "cat 6", id: 6 },
  // { name: "cat 7", id: 7 },
]);
</script>

<template>
  <div class="container">
    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        item-key="id"
        style="width: 100px; height: 100px"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
