import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import Contato from '../pages/Contato.vue'

const routes = [
    {
        path:'/',
        component: Home
    },

    {
        path: '/contato',
        component: Contato
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;