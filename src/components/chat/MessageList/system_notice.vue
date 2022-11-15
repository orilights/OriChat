<template>
    <div class="flex justify-center mb-2">
        <div class="rounded-lg px-4 py-0.5 text-sm bg-gray-300 shadow-sm">{{msg.text}}</div>
    </div>
</template>

<script setup lang="ts">
import { Message } from '@/core/types'
// import { timestampToTime } from '@/utils/time';
defineProps<{
    msg: Message
}>()
</script>