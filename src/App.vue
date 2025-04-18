<script setup>
import { ref } from 'vue'
// import { RouterView } from 'vue-router'
import Title from './components/Title.vue'
import Menu from './components/Menu.vue'
const closeMenu = ref(false)
const changeGrid = () => {
    closeMenu.value = !closeMenu.value
}
</script>
<!--  -->
<template class="">
  <div class="h-full w-full flex items-center justify-center bg-gray-300">

      <div class="grid grid-cols-[300px_596px] w-4xl h-[550px] mx-auto rounded-2xl overflow-hidden shadow-2xl" :class="{'grid':closeMenu}">

      <Menu class="" :class="[closeMenu ? 'hidden' : 'w-[300px]','transition-all duration-500']"/>
      <Title  @removeMenuBar="changeGrid()" :class="[closeMenu ? 'w-[896px]' : 'w-[596px]', 'transition-all duration-500']"/> 
      <!-- <RouterView /> -->

      </div>
  </div>
  
</template>

<style scoped>

</style>
