<script setup>
import Title from '@/components/Title.vue'



</script>


<template>
    <Title  @removeMenuBar="changeGrid()" :class="[closeMenu ? 'w-[896px]' : 'w-[596px]', 'transition-all duration-500']"/>
</template>