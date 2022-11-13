import { useStore } from '@/stores'
import { createRouter, createWebHashHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from) => {
    try {
        const store = useStore()
        // 获取登录状态
        if (!store.login) {
            if (localStorage.getItem('login') === '1') {
                store.login = true
                store.token = localStorage.getItem('token') || 'lost'
                store.userId = localStorage.getItem('id') || '-1'
            }
        }

        // 重定向
        if (to.path == '/login' || to.path == '/register') {
            if (store.login) {
                return '/home'
            }
        } else {
            if (!store.login) {
                return '/login'
            }
        }
    } catch (err) {
        console.log(err);
    }
})

export default router