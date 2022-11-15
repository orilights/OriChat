<template>
    <div class="border h-10 ml-2">{{ roomTitle }}</div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores';
import { computed, toRefs } from 'vue';


const store = useStore()

const { curRoomInfo } = toRefs(store)

const roomTitle = computed(() => curRoomInfo.value.title)
</script>