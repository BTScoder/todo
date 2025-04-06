<script setup>
import { ref, defineEmits} from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faHome, faBurger, faForward, faCalendar, faCalendarXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the icon to the library
library.add(faUser, faHome, faBurger, faForward, faCalendar, faCalendarXmark, faBars);
const openMenu = ref(true)

</script>

<template>
    <div class="menu bg-gray-100 p-10 shadow-xl">
        <div class="flex items-center justify-between mb-10">
            <h3 class=" text-4xl uppercase">Menu</h3>
        </div>

        <h2 class="text-2xl uppercase">Tasks</h2>
        <div class="">
            <ul class="mx-auto ms-4">
                <li class="my-3 flex items-center">
                    <span class="me-2"><font-awesome-icon :icon="['fas', 'forward']" class="text-gray-300 text-2xl"/></span>
                    Upcoming
                </li>
                <li class="my-3">
                    <span class="me-2"><font-awesome-icon :icon="['fas', 'calendar-xmark']" class="text-gray-300 text-2xl"/></span>
                    Today
                </li>
                <li class="my-3">
                    <span class="me-2"><font-awesome-icon :icon="['fas', 'calendar']" class="text-gray-300 text-2xl"/></span>
                    Calendar
                </li>
            </ul>
        </div>
        <h2 class="text-2xl uppercase">Lists</h2>
        <div class="">
            <ul class="mx-auto ms-4">
                <li class="my-3 flex items-center">
                    <span class="inline-block w-4 h-4 bg-amber-900 rounded me-2"></span>
                    Personal
                </li>
                <li class="my-3 flex items-center">
                    <span class="inline-block w-4 h-4 bg-green-200 rounded me-2"></span>
                    Work
                </li>
                <li class="my-3">List</li>
            </ul>
        </div>
        
    </div>
</template>