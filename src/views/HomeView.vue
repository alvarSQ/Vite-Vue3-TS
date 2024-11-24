<template>
  <div>
    <button @click="isShowModal = true">Открыть модальное окно</button>
    <p>{{ messageFolder }}</p>
    <ModalTree
      v-if="isShowModal"
      :folders="mockFolders"
      :nameFolders="nameFolders"
      @select="onFolderSelect"
      @close-modal="isShowModal = !isShowModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModalTree from "@/components/ModalTree.vue";

const nameFolders = ref('Название этих папок')
const isShowModal = ref(false);
const messageFolder = ref('')

const mockFolders = [
  { id: 1, name: "Папка 1", children: [
      { id: 2, name: "Папка 1.1", children: [] },
      { id: 3, name: "Папка 1.2",  children: [
          { id: 4, name: "Папка 1.2.1", children: [
              { id: 5, name: "Папка 1.3", children: [
                  { id: 6, name: "Папка 1.3.1", children: []},
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { id: 7, name: "Папка 2", children: [] },
];

const onFolderSelect = (id: number) => {
  id === 0 ? messageFolder.value = 'Папка не выбрана' : messageFolder.value = `Выбрана папка с идентификатором ${id}`
  isShowModal.value = false;
};
</script>
