<template>
    <div class="border h-40 p-2">
        <p class="mb-2 ml-1">发送信息</p>
        <textarea v-model="message" class="w-full h-[80px] p-2 bg-gray-100 bg-opacity-60 rounded-md resize-none transition-colors hover:bg-white hover:bg-opacity-60 focus:bg-white" placeholder="说点什么"></textarea>
        <div class="flex justify-between">

            <button
                class="px-6 py-0.5 text-sm border border-gray-200 bg-gray-100 hover:border-gray-900 rounded-md transition-colors">表情</button>
            <button class="px-6 py-0.5 text-sm border border-blue-700 bg-blue-500 text-white hover:border-gray-200 rounded-md transition-colors"
                @click="bus.emit('sendMessage', message); message = ''">发送</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import bus from '@/core/bus';
import { ref } from 'vue';

const message = ref('')

</script>