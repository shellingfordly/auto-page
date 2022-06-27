<script lang="ts" setup>
import { createImageInfo } from "@/lib";
import type { ImageInfoType } from "@/types";
import type { FileItem } from "@arco-design/web-vue";
import { Icon } from "@iconify/vue";
import VaUpload from "../upload/VaUpload.vue";

const emit = defineEmits(["delete", "change-link", "change-img"]);
const props = defineProps<{ image: ImageInfoType; deleteIcon?: boolean }>();
const file = computed(() => {
  const url = props.image.url;
  if (url) return createImageInfo({ url }) as unknown as FileItem;
});

function onChangeLink(value: string) {
  emit("change-link", value);
}
</script>

<template>
  <div :class="$style.imageControl" v-bind="$attrs">
    <a-tooltip v-if="deleteIcon" content="删除此项">
      <Icon @click="$emit('delete')" :class="$style.delete" icon="ep:delete" />
    </a-tooltip>
    <div :class="$style.item">
      <span :class="$style.controlItemLabel"> 上传图片： </span>
      <VaUpload :file="file" />
    </div>
    <div :class="$style.item">
      <div :class="$style.controlItemLabel">跳转链接：</div>
      <a-input
        :class="$style.input"
        :model-value="image.link"
        @input="onChangeLink"
      />
    </div>
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
.imageControl {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .delete {
    align-self: flex-end;
    cursor: pointer;
  }

  .item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .controlItemLabel {
      width: 80px;
    }

    .input {
      width: initial;
    }
  }
}
</style>
