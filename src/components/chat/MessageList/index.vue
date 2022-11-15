<template>
    <div class="relative px-2">
        <div ref="messageContainer" class="w-[600px] h-[450px] border p-2 overflow-y-auto">
            <div v-for="msg in curRoomMessageList">
                <system_notice v-if="msg.senderId==1" :msg="msg" />
                <self_msg v-else-if="msg.senderId == Number(store.userId)" :msg="msg" />
                <other_msg v-else :msg="msg" />
            </div>
        </div>
        <div v-if="hasNewMessage" class="absolute top-0 left-0 right-4 bg-blue-200 bg-opacity-80"
            @click="scrollToBottom()">有新信息</div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores';
import { nextTick, onMounted, ref, toRefs, watch } from 'vue';
import system_notice from './system_notice.vue' 
import self_msg from './self_msg.vue' 
import other_msg from './other_msg.vue' 

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