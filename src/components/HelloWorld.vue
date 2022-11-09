<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { onMounted } from "vue";

onMounted(() => {
  console.log("Mounted");
  if (Array.isArray(window.arr)) {
    window.arr.push(getCurrentInstance());
  } else {
    window.arr = [getCurrentInstance()];
  }
});
</script>

<template>
  <div class="greetings">You’ve successfully created a project with</div>
</template>

<style scoped></style>
