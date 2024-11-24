<template>
  <div class="modal">
    <h2>{{ nameFolders }}</h2>
    <ul>
      <Folder
        v-for="folder in folders"
        :key="folder.id"
        :folder="folder"
        :idFolder="idFolder"
        @addId="addId"
      />
    </ul>
    <button class="btn" @click="$emit('select', idFolder)">Готово</button>
    <button class="btn" @click="$emit('closeModal')">Закрыть</button>
  </div>
  <div class="dark" @click="$emit('closeModal')"></div>
</template>

<script setup lang="ts">
import Folder from "./Folder.vue";
import { ref } from "vue";

interface IFolder {
  id: number;
  name: string;
  children: IFolder[];
}

const props = defineProps<{
  folders: IFolder[];
  nameFolders: string;
}>();

const emit = defineEmits(["select", "closeModal"]);

const idFolder = ref(0);

const addId = (id: number) => {
  if (idFolder.value !== id) {
    idFolder.value = id;
  } else {
    idFolder.value = 0;
  }
};
</script>

<style scoped lang="scss">
li {
  cursor: pointer;
}
</style>
