import Vue from 'vue'
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import TaskManager from "@/pages/TaskManager.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/tasks',
        component: TaskManager,
    }
]

export default new VueRouter( {
    mode: 'history',
    routes
})