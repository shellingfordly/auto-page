<script lang="ts" setup>
import draggable from "vuedraggable";
import Son from "./Son.vue";
let idGlobal = 100;
const list1 = ref([
  { name: "dog 1", id: 1 },
  { name: "dog 2", id: 2 },
  { name: "dog 3", id: 3 },
  { name: "dog 4", id: 4 },
]);
function cloneDog({ id }) {
  console.log(11111);
  return {
    id: idGlobal++,
    name: `xxxx ${id}`,
  };
}
</script>

<template>
  <div class="row">
    <h3>Draggable 1</h3>
    <draggable
      :list="list1"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :clone="cloneDog"
      item-key="id"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          {{ element.name }}
        </div>
      </template>
    </draggable>
    <Son />
  </div>
</template>

<style scoped></style>
