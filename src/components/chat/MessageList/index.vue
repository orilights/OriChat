<template>
    <div class="relative overflow-hidden">
        <div ref="messageContainer" class="border h-80 w-96 p-2 overflow-y-auto">
            <div v-for="msg in curRoomMessageList" class="flex flex-row mb-2">
                <img :src="msg.user.avatar" class="w-8 h-8 rounded-sm mr-2">
                <div>
                    <p class="text-xs">{{ msg.user.nickname }} <span class="text-gray-400 text-2xs">{{
                            timestampToTime(Date.parse(msg.createdAt))
                    }}</span></p>
                    <p class="text-sm bg-white rounded-md rounded-tl-none px-2 py-1">{{ msg.text }}</p>
                </div>
            </div>
        </div>
        <div v-if="hasNewMessage" class="absolute top-0 left-0 right-4 bg-blue-200 bg-opacity-80"
            @click="scrollToBottom()">有新信息</div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores';
import { timestampToTime } from '@/utils/time';
import { nextTick, onMounted, ref, toRefs, watch } from 'vue';

const store = useStore()

const { curRoomMessageList } = toRefs(store)

const messageContainer = ref<HTMLElement | null>(null)
const hasNewMessage = ref(false)

onMounted(() => {
    setTimeout(scrollToBottom, 300)
})

watch(curRoomMessageList, async () => {
    await nextTick();
    if (messageContainer.value) {
        if (messageContainer.value.scrollHeight - messageContainer.value.scrollTop < 1000) {
            scrollToBottom()
        } else {
            hasNewMessage.value = true
        }
    }
}, { deep: true })


function scrollToBottom() {
    hasNewMessage.value = false
    if (messageContainer.value) {
        messageContainer.value.scrollTo({
            top: messageContainer.value.scrollHeight,
            behavior: 'smooth'
        })
    }
}

</script>