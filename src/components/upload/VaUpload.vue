<script lang="ts" setup>
import IconEdit from "@arco-design/web-vue/es/icon/icon-edit";
import IconPlus from "@arco-design/web-vue/es/icon/icon-plus";
import type { FileItem } from "@arco-design/web-vue";

const emit = defineEmits(["upload"]);
defineProps<{ file?: FileItem }>();

const onChange = (_: any, currentFile: FileItem) => {};
const onProgress = (currentFile: FileItem) => {
  emit("upload", currentFile.url);
};
</script>

<template>
  <a-space direction="vertical">
    <a-upload
      action="/"
      :fileList="file ? [file] : []"
      :show-file-list="false"
      @change="onChange"
      @progress="onProgress"
    >
      <template #upload-button>
        <div
          :class="`arco-upload-list-item${
            file && file.status === 'error'
              ? ' arco-upload-list-item-error'
              : ''
          }`"
        >
          <div
            class="arco-upload-list-picture custom-upload-avatar"
            v-if="file && file.url"
          >
            <img :src="file.url" />
            <div class="arco-upload-list-picture-mask">
              <IconEdit />
            </div>
            <a-progress
              v-if="file.status === 'uploading' && Number(file.percent) < 100"
              :percent="file.percent"
              type="circle"
              size="mini"
              :style="{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
              }"
            />
          </div>
          <div class="arco-upload-picture-card" v-else>
            <div class="arco-upload-picture-card-text">
              <IconPlus />
            </div>
          </div>
        </div>
      </template>
    </a-upload>
  </a-space>
</template>
