<template>
  <div>
    <FolderTree :folders="mockFolders" @select="handleFolderSelect" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FolderTree from '@/components/FolderTree.vue';

const selectedFolderId = ref(null);

const handleFolderSelect = (folderId) => {
  selectedFolderId.value = folderId;
};

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
</script>
