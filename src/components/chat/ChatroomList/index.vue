<template>
    <div class="w-52 border">
        <p class="text-lg">用户信息</p>
        <div class="flex flex-row">
            <img :src="userAvatar" class="w-10 h-10 rounded-full shadow-md">
            <div class="ml-2">
                <p class="text-sm">当前登录：{{ userNickname }}</p>
            </div>
        </div>

        <p class="text-lg mt-4">房间列表</p>
        <div class="h-96 overflow-y-auto">
            <div v-for="room in roomList"
                class="text-sm px-2 py-1 mr-4 hover:pl-3 hover:text-gray-600 hover:bg-slate-300 rounded-md transition-all"
                @click="switchRoom(room)">
                {{ room }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import bus from '@/core/bus';
import { useStore } from '@/stores';
import { toRefs } from 'vue';

const store = useStore()

const { userAvatar, userNickname, roomList } = toRefs(store)

function switchRoom(room_id: string) {
    bus.emit('switchRoom', room_id);
    console.log(room_id);
}

</script>