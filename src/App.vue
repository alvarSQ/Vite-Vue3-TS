<template>
  <div class="wapper">
      <div class="wrapper-content">
        <div class="container">
          <RouterView />
        </div>
      </div>
    </div>  
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>