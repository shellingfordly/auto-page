<script setup lang="ts">
import VaHeader from "./header/Header.vue";
import VaContent from "./content/Content.vue";
</script>
<template>
  <a-layout :class="$style.layout">
    <VaHeader />
    <VaContent />
  </a-layout>
</template>

<style module scoped lang="less">
.layout {
  height: 100%;
}
</style>
