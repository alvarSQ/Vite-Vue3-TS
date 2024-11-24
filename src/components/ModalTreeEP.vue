<template>
  <div class="modal">
    <h2>{{ nameFolders }}</h2>
    <el-tree
      :data="folders"
      :props="defaultProps"
      default-expand-all
      check-strictly
      :expand-on-click-node="false"
      @node-click="handleNodeClick"
    />
    <button class="btn" @click="$emit('select', idFolder)">Готово</button>
    <button class="btn" @click="$emit('closeModal')">Закрыть</button>
  </div>
  <div class="dark" @click="$emit('closeModal')"></div>
</template>

<script setup lang="ts">
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

const defaultProps = {
  children: "children",
  label: "name",
};

const idFolder = ref(0);

const handleNodeClick = (folder: IFolder) => {
  idFolder.value = folder.id;
  console.log(folder.id)
}

const emit = defineEmits(["closeModal", "select"]);
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
</style>
