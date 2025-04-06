<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faHome, faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the icon to the library
library.add(faUser, faHome, faBurger);
</script>


<template>
    
    
    <div class=" bg-gray-100 p-10">
        <!-- Title -->
        <div class="flex items-center justify-between">
            <span @click="$emit('removeMenuBar')"><font-awesome-icon :icon="['fas','bars']" class="text-4xl text-black cursor-pointer"/></span>
            <h1 class="text-4xl">Sticky Walls</h1>
        </div>
        
        <!-- Sticky notes -->
         <div>
            
         </div>

    </div>

</template>
