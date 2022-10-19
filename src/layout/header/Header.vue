<script lang="ts" setup>
import { IconMoonFill, IconSunFill } from "@arco-design/web-vue/es/icon";
import Nav from "../nav/Nav.vue";
const isDark = ref(false);

onClick();

function onClick() {
  if (!isDark.value) {
    isDark.value = true;
    // 设置为暗黑主题
    document.body.setAttribute("arco-theme", "dark");
  } else {
    // 恢复亮色主题
    document.body.removeAttribute("arco-theme");
    isDark.value = false;
  }
}
</script>

<template>
  <a-layout-header :class="$style.header">
    <a-row>
      <a-col :span="5" align="left"> logo </a-col>
      <a-col :span="14">
        <a-space>
          <a-button>预览</a-button>
          <a-button>导入json</a-button>
          <a-button>导出json</a-button>
        </a-space>
        <!-- <Nav /> -->
      </a-col>
      <a-col :span="5" align="right">
        <a-button type="text" @click="onClick">
          <icon-moon-fill v-if="isDark" />
          <icon-sun-fill v-else />
        </a-button>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<style module scoped lang="less">
.header {
  height: 58px;
  text-align: center;
  line-height: 58px;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-2);
}
</style>
