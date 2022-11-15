<template>
    <div class="flex flex-row mb-2 justify-end ">
        <div class="ml-10">
            <p class="text-right"><span class="text-gray-400 text-[10px]">{{
                timestampToTime(Date.parse(msg.createdAt))
                }}</span></p>
            <div class="text-sm float-right w-fit rounded-md rounded-tr-none px-2 py-1 bg-blue-500 text-white shadow-sm select-text">{{ msg.text }}</div>
        </div>
        <img :src="msg.user.avatar" class="w-8 h-8 rounded-sm ml-2 shadow-md">
    </div>

</template>

<script setup lang="ts">
import { Message } from '@/core/types'
import { timestampToTime } from '@/utils/time';
defineProps<{
    msg: Message
}>()
</script>
