import { RouteRecordRaw } from 'vue-router'

// 路由数组
const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "chatroom" */ '@views/Home.vue'),
    }, {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@views/Login.vue'),
    }, {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@views/Register.vue'),
    }, {
        path: '/',
        redirect: '/home',
    }, {
        path: '/:pathMatch(.*)*',
        redirect: '/home',
    }
]

// 暴露路由数据
export default routes