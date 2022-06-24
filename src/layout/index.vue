<script setup lang="ts">
import VaHeader from "./header/Header.vue";
import VaContent from "./content/Content.vue";
</script>
<template>
  <a-layout style="height: 100%">
    <VaHeader />
    <a-layout>
      <VaContent />
    </a-layout>
  </a-layout>
</template>
