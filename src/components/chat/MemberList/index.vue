<template>
    <div class="border w-48 p-2">
        <p>当前在线：{{ onlineUser }}人</p>
        <div class="overflow-y-auto bg-gray-100 bg-opacity-60 rounded-md h-72">
            <div class="px-1 hover:bg-blue-100 " v-for="member in curRoomMemberList">{{ member.nickname }}({{ member.id
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