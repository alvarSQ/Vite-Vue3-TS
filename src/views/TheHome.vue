<template>
  <div class="content">
    <p>{{ messageFolder }}</p>
    <button class="btn" @click="isShowModalOne = true">
      Открыть модальное окно без внешних инструментов
    </button>
    <ModalTree
      v-if="isShowModalOne"
      :folders="mockFolders"
      :nameFolders="nameFolders"
      @select="onFolderSelect"
      @close-modal="isShowModalOne = !isShowModalOne"
    />
    <button class="btn" @click="isShowModalEP = true">
      Открыть модальное окно с использованием "Еlement-plus"
    </button>
    <ModalTreeEP
      v-if="isShowModalEP"
      :folders="mockFolders"
      :nameFolders="nameFoldersEP"
      @select="onFolderSelect"
      @close-modal="isShowModalEP = !isShowModalEP"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModalTree from "@/components/ModalTree.vue";
import ModalTreeEP from "@/components/ModalTreeEP.vue";

const nameFolders = ref("Дерево папок без внешних инструментов");
const nameFoldersEP = ref('Дерево папок c использованием "Еlement-plus"');
const isShowModalOne = ref(false);
const isShowModalEP = ref(false);
const messageFolder = ref("");

const mockFolders = [
  {
    id: 1,
    name: "Папка 1",
    children: [
      { id: 11, name: "Папка 1.1", children: [] },
      {
        id: 12,
        name: "Папка 1.2",
        children: [
          {
            id: 121,
            name: "Папка 1.2.1",
            children: [
              {
                id: 13,
                name: "Папка 1.3",
                children: [{ id: 131, name: "Папка 1.3.1", children: [] }],
              },
            ],
          },
        ],
      },
    ],
  },
  { id: 2, name: "Папка 2", children: [] },
];

const onFolderSelect = (id: number) => {
  id === 0
    ? (messageFolder.value = "Папка не выбрана")
    : (messageFolder.value = `Выбрана папка с идентификатором ${id}`);
  isShowModalOne.value = false;
  isShowModalEP.value = false;
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  gap: 30px
}
</style>
