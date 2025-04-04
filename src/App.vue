<script setup>
import Home from './components/Home.vue'
import Title from './components/Title.vue'
import Menu from './components/Menu.vue'
</script>

<template class="">
  <div class="h-full w-full flex items-center justify-center bg-gray-300">
    <div class="grid grid-cols-2 w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <Menu />
      <Title />
    </div>
    <!-- <div class="w-50 h-50 bg-white ">

    </div> -->
  </div>
  
</template>

<style scoped></style>
