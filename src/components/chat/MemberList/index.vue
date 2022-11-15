<template>
    <div class="border w-full">
        <p class="my-2 text-lg font-bold">当前在线：{{ onlineUser }}人</p>
        <div class="h-[420px] overflow-y-auto bg-gray-100 bg-opacity-60 rounded-md shadow-sm">
            <div class="px-2 py-0.5 hover:bg-gray-300 transition-colors" v-for="member in curRoomMemberList">{{ member.nickname }}({{ member.id
            }})</div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores';
import { computed, toRefs } from 'vue';

const store = useStore()

const { curRoomMemberList } = toRefs(store)

const onlineUser = computed(() => curRoomMemberList.value.length)
</script>