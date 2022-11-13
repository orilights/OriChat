<template>
    <div class="border h-40 p-2">
        <p class="mb-2">发送信息</p>
        <textarea v-model="message" class="w-full h-20 p-2 rounded-md resize-none"></textarea>
        <div class="">

            <button
                class="mr-2 px-2 py-0.5 text-sm border border-gray-400 bg-gray-100 hover:border-gray-900 rounded-md">表情</button>
            <button class="mr-2 px-2 py-0.5 text-sm border border-gray-400 bg-gray-100 hover:border-gray-900 rounded-md"
                @click="bus.emit('sendMessage', message); message = ''">发送</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import bus from '@/core/bus';
import { ref } from 'vue';

const message = ref('')

</script>