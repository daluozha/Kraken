<script setup lang="ts">
import threejs from "./three";
import { onMounted } from "vue";
onMounted(() => {
    new threejs();
});
</script>

<template><div class="demo"></div></template>

<style></style>
