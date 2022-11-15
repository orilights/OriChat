<template>
    <div class="border h-[150px]">
        <p>房间公告</p>
        <div class="text-sm p-2 h-[130px] bg-gray-100 bg-opacity-60 rounded-md">
            <p>{{ notice }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores';
import { computed, toRefs } from 'vue';


const store = useStore()

const { curRoomInfo } = toRefs(store)

const notice = computed(() => curRoomInfo.value.notice)
</script>