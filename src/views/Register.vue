<template>
    <p class="text-center font-semibold text-xl mb-6">OriChat注册</p>
    <p class="my-4">账号： <input class="border px-1 rounded-md" type="text" placeholder="请输入账号" v-model="userName"></p>
    <p class="my-4">昵称： <input class="border px-1 rounded-md" type="text" placeholder="请输入昵称" v-model="userNickname">
    </p>
    <p class="my-4">邮箱： <input class="border px-1 rounded-md" type="email" placeholder="请输入邮箱" v-model="userEmail">
    </p>
    <p class="my-4">密码： <input class="border px-1 rounded-md" type="password" placeholder="请输入密码"
            v-model="userPassword"></p>
    <p class="my-4">性别：
        <select class="border  py-0.5 rounded-md" v-model.number="userSex">
            <option disabled value="0">请选择性别</option>
            <option v-for="sex in SEX_LIST" :value="sex.id">{{ sex.text }}</option>
        </select>
    </p>
    <div class="button-group mt-6 flex justify-center">
        <RouterLink to="/login">
            <button
                class="transition-colors px-4 py-1 mr-2 border-black border rounded-lg hover:bg-black hover:text-white">&lt;返回登录</button>
        </RouterLink>
        <button class="transition-colors px-4 py-1 mr-2 border-black border rounded-lg hover:bg-black hover:text-white"
            @click="userRegister">注册</button>
    </div>
</template>

<script setup lang="ts">
import { register as apiUserRegister } from '@/api/user';
import router from '@/router';
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const SEX_LIST = [
    { id: 1, text: "男" },
    { id: 2, text: "女" },
    { id: 3, text: "保密" },
]

const toast = useToast()

const userName = ref('')
const userPassword = ref('')
const userNickname = ref('')
const userEmail = ref('')
const userSex = ref(0)

async function userRegister() {
    const result = await apiUserRegister(userName.value, userPassword.value, userNickname.value, userEmail.value, userSex.value)
    if (result.code == 0) {
        toast.success('注册成功')
        router.push('/login')
    } else {
        toast.error(String(result.msg))
    }
}
</script>
