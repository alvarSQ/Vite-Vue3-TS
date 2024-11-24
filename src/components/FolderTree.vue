<template>
  <ul>
    <Folder v-for="folder in folders" :key="folder.id" :folder="folder" />
  </ul>
</template>

<script setup>
import Folder from './Folder.vue';

const props = defineProps({
  folders: Array,
});

const emitSelect = (folderId) => {
  $emit('select', folderId);
};
</script>
