import { createRouter, createWebHistory } from "vue-router";
import inputTaskView from '@/components/InputTask.vue';
import HomeView from '@/views/HomeView.vue'

const routes = [
    {
        path:'/',
        component: HomeView
    },
    {
        path:'/inputTask',
        component: inputTaskView
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;