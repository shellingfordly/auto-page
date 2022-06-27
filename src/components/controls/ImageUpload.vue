<script lang="ts" setup>
import { SlideshowListItem } from "@/schemas";
import type { FileItem } from "@arco-design/web-vue";

const props = defineProps<{ image: SlideshowListItem }>();
const fileList = computed<FileItem[]>(() => [
  {
    uid: "-1",
    url: props.image.url,
  },
]);
</script>

<template>
  <div :class="$style.item">
    <span :class="$style.controlItemLabel"> 上传图片： </span>
    <a-upload
      action="/"
      list-type="picture-card"
      :fileList="fileList"
      image-preview
    />
  </div>
  <div :class="$style.item">
    <div :class="[$style.controlItemLabel, $style.link]">跳转链接：</div>
    <a-input :class="$style.input" :model-value="image.link" />
  </div>
</template>

<style module scoped lang="less">
@import "@/styles/modules/control.module.less";
.item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .link {
    width: 76px;
  }

  .input {
    width: initial;
  }
}
</style>
