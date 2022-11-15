<template>
    <div class="w-[200px] h-full border mr-2">
        <p class="text-lg ml-2 mb-2">用户信息</p>
        <div class="flex flex-row h-20 p-2">
            <img :src="userAvatar" class="w-10 h-10 rounded-full shadow-md">
            <div class="ml-2">
                <p class="text-sm">{{ userNickname }}</p>
                <button @click="bus.emit('logout')">logout</button>
            </div>
        </div>

        <p class="text-lg ml-2 mb-2">房间列表</p>
        <div class="h-[500px] overflow-y-auto bg-gray-100 bg-opacity-60 rounded-md">
            <div v-for="room in roomList"
                class="text-sm px-2 py-1 hover:pl-3 hover:bg-gray-200 transition-all"
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