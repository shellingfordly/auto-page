<script lang="ts" setup>
import type { SchemaItemType, PositionType } from "@/types";
import SchemaTemplate from "./SchemaTemplate.vue";
import { DRAGGABLE_GROUP } from "@/constants";
import draggable from "vuedraggable";
import { SchemaStore } from "@/store/modules/template";
import { useEventListener } from "@vueuse/core";

const content = ref<SchemaItemType[]>([]);
const dragRef = ref();
const boxElement = ref();
const schemaStore = SchemaStore();
const schema = computed(() => schemaStore.selectedSchema);
const { start } = useBoxDraggable(dragRef, {
  boxElement,
  onMoving,
  status: computed(() => unref(schema)?.floatStatus),
  format: true,
});
const stop = useEventListener(document, "keydown", (evt: KeyboardEvent) => {
  const schemaId = unref(schema)?.schemaId;
  if (schemaId && ["Backspace", "Delete"].includes(evt.code)) {
    content.value = unref(content).filter((v) => v.schemaId !== schemaId);
    schemaStore.setSelectedSchema(null);
  }
});

onUnmounted(stop);

function pointerdown(e: PointerEvent) {
  dragRef.value = e.target;
  // start();
}

function onMoving(pos: PositionType) {
  // unref(schema)?.style.setValue("top", pos.y);
  // unref(schema)?.style.setValue("left", pos.x);
}
</script>

<template>
  <a-layout :class="$style.preview">
    <a-resize-box :directions="['right', 'bottom']" :class="$style.resizeBox">
      <div ref="boxElement" :class="$style.scrollBox">
        <draggable
          :class="$style.draggable"
          :list="content"
          :group="DRAGGABLE_GROUP"
          item-key="schemaId"
          ghost-class="ghost-item"
        >
          <template #item="{ element }">
            <div>
              <SchemaTemplate :schema="element" @pointerdown="pointerdown" />
            </div>
          </template>
        </draggable>
      </div>
    </a-resize-box>
  </a-layout>
</template>

<style module scoped lang="less">
.preview {
  display: flex;
  justify-content: center;
  align-items: center;

  .resizeBox {
    position: relative;
    width: 800px;
    min-width: 600px;
    max-width: 1200px;
    height: 600px;
    min-height: 300px;
    max-height: 1200px;
    background-color: var(--color-bg-4);

    .scrollBox {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;

      .draggable {
        position: relative;
        height: 100%;
      }
    }
  }
}
</style>
