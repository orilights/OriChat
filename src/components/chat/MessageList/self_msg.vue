<template>
    <div class="flex flex-row justify-end mb-2">
        <div>
            <p class="text-xs text-right"><span class="text-gray-400 text-2xs">{{
                    timestampToTime(Date.parse(msg.createdAt))
            }}</span></p>
            <p class="text-sm rounded-md rounded-tr-none px-2 py-1 bg-blue-500 text-white">{{ msg.text }}</p>
        </div>
        <img :src="msg.user.avatar" class="w-8 h-8 rounded-sm ml-2">
    </div>

</template>

<script setup lang="ts">
import { Message } from '@/core/types'
import { timestampToTime } from '@/utils/time';
defineProps<{
    msg: Message
}>()
</script>
