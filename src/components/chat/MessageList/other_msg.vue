<template>
    <div class="flex flex-row mb-2 justify-start">
        <img :src="msg.user.avatar" class="w-8 h-8 rounded-sm mr-2 shadow-md">
        <div class="mr-10">
            <p class="text-sm">{{ msg.user.nickname }} <span class="text-gray-400 text-[10px]">{{
                timestampToTime(Date.parse(msg.createdAt))
                }}</span></p>
            <div class="text-base w-fit rounded-md rounded-tl-none px-2 py-1 bg-white shadow-sm select-text">{{ msg.text }}</div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { Message } from '@/core/types'
import { timestampToTime } from '@/utils/time';
defineProps<{
    msg: Message
}>()
</script>