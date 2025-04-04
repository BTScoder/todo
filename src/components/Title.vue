<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faHome, faBurger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the icon to the library
library.add(faUser, faHome, faBurger);
</script>


<template>
    
    
    <div class="container bg-gray-100 ">
        <!-- <div class="burger me-4 cursor-pointer">
            <font-awesome-icon :icon="['fas', 'burger']" class="text-black text-4xl" />
        </div> -->
        <h1 class="text-4xl">Sticky Walls</h1>
    </div>

</template>
