<template>
    <p class="text-center font-semibold text-xl mb-6">OriChat登录</p>
    <p class="my-4">账号： <input class="border px-1 rounded-md" type="text" placeholder="请输入账号" v-model="userName"></p>
    <p class="my-4">密码： <input class="border px-1 rounded-md" type="password" placeholder="请输入密码"
            v-model="userPassword"></p>
    <div class="button-group mt-6 flex justify-center">
        <button class="transition-colors px-4 py-1 mr-2 border-black border rounded-lg hover:bg-black hover:text-white"
            @click="userLogin">登录</button>
        <RouterLink to="/register">
            <button
                class="transition-colors px-4 py-1 mr-2 border-black border rounded-lg hover:bg-black hover:text-white">前往注册&gt;</button>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { login as apiUserLogin } from '@/api/user';
import router from '@/router';
import { useStore } from '@/stores';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const userName = ref('')
const userPassword = ref('')

const store = useStore()
const toast = useToast()

async function userLogin() {
    const result = await apiUserLogin(userName.value, userPassword.value)
    if (result.code == 0) {
        toast.success('登录成功')
        const data = JSON.parse(result.msg)

        localStorage.setItem('login', '1')
        localStorage.setItem('id', data['id'])
        localStorage.setItem('token', data['token'])

        store.login = true
        store.token = data['token']
        store.userId = data['id']
        store.userName = data['name']

        router.push('home')
    } else {
        toast.error(String(result.msg))
    }
}
</script>