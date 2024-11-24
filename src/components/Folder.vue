<template>
  <li
    @click.stop="$emit('addId', folder.id)"
    :class="[idFolder === folder.id ? 'selected' : 'an-selected']"
  >
    {{ folder.name }}
    <ul v-if="folder.children.length > 0">
      <Folder
        v-for="childFolder in folder.children"
        :key="childFolder.id"
        :folder="childFolder"
        :idFolder="idFolder"
        @addId="addId"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
const emit = defineEmits(["addId"]);

interface IFolder {
  id: number;
  name: string;
  children: IFolder[];
}

const props = defineProps<{
  folder: IFolder;
  idFolder: number;
}>();

const addId = (id: number) => {
  emit("addId", id);
};
</script>

<style scoped lang="scss">
.selected {
  color: rgb(65, 68, 236);
}

.an-selected {
  color: black;
}
</style>
