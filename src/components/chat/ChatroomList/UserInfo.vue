<template>
    <div
        class="absolute left-[150px] w-[210px] px-6 py-4 rounded-md shadow-md text-sm bg-white bg-opacity-60 backdrop-blur-md z-10 hidden group-hover:block transition-all">
        <p>昵称：{{ userNickname }}</p>
        <p>用户名：{{ userName }}</p>
        <p>签名：{{ userSign }}</p>
        <p>
            <button
                class="px-2 py-0.5 mt-2 mr-2 text-sm border border-gray-200 bg-gray-100 hover:border-gray-900 rounded-md transition-colors shadow-sm">修改资料</button>
            <button
                class="px-2 py-0.5 mt-2 text-sm border border-gray-200 bg-gray-100 hover:border-gray-900 rounded-md transition-colors shadow-sm"
                @click="bus.emit('logout')">退出登录</button>
        </p>
    </div>
</template>

<script setup lang="ts">
import bus from '@/core/bus';
import { useStore } from '@/stores';
import { toRefs } from 'vue';

const store = useStore()

const { userName, userNickname, userSign } = toRefs(store)

</script>