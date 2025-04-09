<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faHome, faBurger, faPlus, faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Add the icon to the library
library.add(faUser, faHome, faBurger, faPlus, faTrash, faPencil);
// End of font awesome icons

import { ref, onMounted} from 'vue'
const fakeTasks = ref([])
const stickyColors = ref([
    'bg-pink-100',
    'bg-red-100',
    'bg-blue-100',
    'bg-yellow-100',
    'bg-green-100'
])

// Fetch data from the API
 onMounted(async () => {
    try{
        const response = await fetch('https://dummyjson.com/todos')
        const data = await response.json()
        console.log(data.todos)
        fakeTasks.value = data.todos
    } catch(error) {
        console.error('Error fetching data:', error);
    }
 })

// Delete Task function
const deleteTask = (index) => {
    fakeTasks.value.splice(index,1)
}



// Creating the different sticky note colors
const generateRandomNumber = () => {
    return Math.floor(Math.random() * 4) + 1
}
</script>


<template>
    
    
    <div class=" bg-gray-100 p-10 overflow-scroll">
        <!-- Title -->
        <div class="flex items-center justify-between">
            <span @click="$emit('removeMenuBar')"><font-awesome-icon :icon="['fas','bars']" class="text-4xl text-black cursor-pointer"/></span>
            <h1 class="text-4xl">Sticky Walls</h1>
        </div>
        
        <!-- Sticky notes -->
        <div class="container mx-auto grid grid-cols-3 gap-6 mt-10 text-center">
            <div class="w-full h-[200px] bg-gray-300 rounded-2xl flex items-center justify-center ">
                <span>
                    <font-awesome-icon :icon="['fas','plus']" class="text-4xl text-black cursor-pointer"></font-awesome-icon>
                </span>
            </div>
            <!-- Generated Fake Tasks -->
            <div v-for="(task, index ) in fakeTasks" :key="index">
                <div class="w-full h-[200px] rounded-3xl p-2 relative shadow-xl" :class="stickyColors[generateRandomNumber()]">
                    <p><span>{{ task.id }}. </span>{{ task.todo }}</p>
                    <div class="absolute bottom-2 ms-2 flex items-center justify-between w-[90%]">
                        <div class=" p-1 bg-gray-300 rounded-2xl cursor-pointer">
                            <p class="text-center text-sm" v-if="task.completed==false">Not completed</p>
                            <p class="text-center text-sm" v-else>Completed</p>
                        </div>
                        <div class="transition-all duration-500">
                            <span><font-awesome-icon :icon="['fas','trash']" class="text-lg text-red-300 me-5 transition-all duration-500 cursor-pointer hover:text-xl" @click="deleteTask(index)"></font-awesome-icon></span>
                            <span><font-awesome-icon :icon="['fas','pencil']" class="text-lg text-black transition-all duration-500 cursor-pointer hover:text-xl"></font-awesome-icon></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
