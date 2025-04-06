<script setup>
import { ref } from 'vue'
import Home from './components/Home.vue'
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

    <div class="grid grid-cols-[300px_596px] w-4xl h-[530px] mx-auto rounded-2xl overflow-hidden shadow-2xl transition-(display)" :class="{'grid':closeMenu}">

      <Menu class="" :class="[closeMenu ? 'hidden' : 'block']"/>
      <Title @removeMenuBar="changeGrid()" :class="{'w-[896px]':closeMenu}"/>

    </div>
  </div>
  
</template>

<style scoped>

</style>
