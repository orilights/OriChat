<template>
    <div class="flex flex-row mb-2">
        <img :src="msg.user.avatar" class="w-8 h-8 rounded-sm mr-2">
        <div>
            <p class="text-xs">{{ msg.user.nickname }} <span class="text-gray-400 text-2xs">{{
                    timestampToTime(Date.parse(msg.createdAt))
            }}</span></p>
            <p class="text-sm rounded-md rounded-tl-none px-2 py-1 bg-white">{{ msg.text }}</p>
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