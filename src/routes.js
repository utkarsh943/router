import {createWebHistory,createRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
import LoginPage from './components/Login.vue';
import Profile from './components/Profile.vue';


const routes=[
    {
        name: 'HelloWorld',
        path: '/',
        component: HelloWorld
    },
    {
        name: 'LoginPage',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'Profile',
        path: '/profile',
        component: Profile
    }
];

const router= createRouter({
    history:createWebHistory(),
    routes
});

export default router;