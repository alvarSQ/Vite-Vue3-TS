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
    <button @click="$emit('select', idFolder)">Готово</button>
    <button @click="$emit('closeModal')">Закрыть</button>
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
.modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
  min-width: 340px;
  padding: 20px;
  gap: 20px;
  border-radius: 15px;
  background-color: white;
  z-index: 99;
  @media (max-width: 412px) {
    width: 100%;
  }
}

.dark {
  background: #000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  z-index: 98;
}

li {
  cursor: pointer;
}
</style>
