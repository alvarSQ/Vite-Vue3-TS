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

</style>
