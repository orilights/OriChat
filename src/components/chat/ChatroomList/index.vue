<template>
    <div class="w-[200px] h-full border mr-2">
        <p class="mb-2 text-lg font-bold">用户信息</p>
        <div class="flex flex-row h-20 p-2 group relative">
            <img :src="userAvatar" class="w-10 h-10 rounded-full shadow-md">
            <div class="ml-2">
                <p class="text-base">{{ userNickname }}</p>
                <!-- <button
                    class="px-2 py-0.5 text-sm border border-gray-200 bg-gray-100 hover:border-gray-900 rounded-md transition-colors shadow-sm"
                    @click="bus.emit('logout')">退出登录</button> -->
            </div>
            <UserInfo />
        </div>

        <p class="mb-2 text-lg font-bold">房间列表</p>
        <div class="h-[500px] overflow-y-auto bg-gray-100 bg-opacity-60 rounded-md shadow-sm">
            <div v-for="room in roomList" class="text-sm px-2 py-1 hover:pl-3 hover:bg-gray-300 transition-all"
                @click="switchRoom(room.id)">
                {{ room.title }} ({{ room.id }})</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import UserInfo from '@/components/chat/ChatroomList/UserInfo.vue';
import bus from '@/core/bus';
import { useStore } from '@/stores';
import { toRefs } from 'vue';

const store = useStore()

const { userAvatar, userNickname, roomList } = toRefs(store)

function switchRoom(room_id: string) {
    bus.emit('switchRoom', room_id);
}

</script>