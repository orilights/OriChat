<template>
    <div class="border h-32">
        <p>房间公告</p>
        <div class="text-sm">
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