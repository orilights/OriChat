<template>
    <div class="flex flex-row select-none">
        <ChatroomList />
        <div class="flex flex-col">
            <ChatHeader />
            <div class="flex flex-row">
                <div class="flex flex-col">
                    <MessageList />
                    <MessagePanel />
                </div>
                <div class="flex flex-col w-[250px] pl-2">
                    <ChatroomNotice />
                    <MemberList />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import ChatroomList from '@cp/chat/ChatroomList/index.vue'
import ChatroomNotice from '@cp/chat/ChatroomNotice/index.vue'
import ChatHeader from '@cp/chat/ChatHeader/index.vue'
import MessageList from '@cp/chat/MessageList/index.vue'
import MessagePanel from '@cp/chat/MessagePanel/index.vue'
import MemberList from '@cp/chat/MemberList/index.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import { verify as apiUserVerify, info as apiUserInfo } from '@/api/user'
import { history as apiHistory, roomInfo as apiRoomInfo } from '@/api/chat'
import { useStore } from '@/stores'
import { clearLoginState } from '@/utils/user'
import router from '@/router'
import io from 'socket.io-client'
import bus from '@/core/bus'
import { useToast } from 'vue-toastification'

const store = useStore()
const toast = useToast()
let socket: SocketIOClient.Socket

onMounted(async () => {
    if (await verifyUser()) {
        getUserInfo()
        getRoomInfo()
        getMessageHistory()
        initBus()
        initSocket()
    }
})

onBeforeUnmount(() => {
    bus.off('sendMessage', sendMessage)
    bus.off('switchRoom', switchRoom)
    bus.off('logout', logout);
    socket.close()
})

async function verifyUser() {
    const result = await apiUserVerify(store.token)
    if (result.code !== 0) {
        toast.warning('登录状态过期，请重新登录')
        clearLoginState()
        router.push('/login')
        return false
    }
    return true
}

async function getUserInfo() {
    const result = await apiUserInfo(store.userId)
    if (result.code == 0) {
        const data = JSON.parse(result.msg)['info']
        store.userName = data['name']
        store.userNickname = data['nickname']
        store.userEmail = data['email']
        store.userSex = data['sex']
        store.userStatus = data['status']
        store.userAvatar = data['avatar']
        store.userSign = data['sign']
    } else {
        toast.error(result.msg)
    }
}

async function getRoomInfo() {
    const result = await apiRoomInfo(store.curRoomId)
    if (result.code == 0) {
        const data = JSON.parse(result.msg)
        store.curRoomInfo = data
    } else {
        toast.error(result.msg)
    }
}

async function getMessageHistory() {
    const result = await apiHistory(store.token, store.curRoomId)
    if (result.code == 0) {
        const data = JSON.parse(result.msg)['history']
        store.curRoomMessageList = data
    } else {
        toast.error(result.msg)
    }
}

function initBus() {
    bus.on('sendMessage', sendMessage)
    bus.on('switchRoom', switchRoom)
    bus.on('logout', logout)
}

function initSocket() {
    socket = io(import.meta.env.VITE_WS_BASE, {
        query: {
            token: store.token
        },
        timeout: 5000,
    });

    socket.on("connect", () => {
        console.log('[WS]建立连接', socket.id, socket.connected);
    });

    socket.on("disconnect", (reason: string) => {
        console.log('[WS]连接断开');
        toast.warning('与聊天服务器的连接已断开', {
            timeout: 5000
        })
    });

    socket.on("authFail", (message: string) => {
        console.log('[WS]验证失败');
        toast.error(message)
    });

    socket.on("newMessage", (message: string) => {
        console.log('[WS]收到信息：' + message);
        const data = JSON.parse(message)
        store.curRoomMessageList.push(data)
    });

    socket.on('updateRoomInfo', (room_id: string) => {
        console.log('[WS]更新房间信息：' + room_id);
        store.curRoomId = Number(room_id)
        getRoomInfo()
        getMessageHistory()
    })

    socket.on('updateRoomList', (roomList: string) => {
        console.log('[WS]更新房间列表：' + roomList);
        store.roomList = JSON.parse(roomList)
    })

    socket.on("updateMemberList", (message: string) => {
        console.log('[WS]更新房间成员列表：' + message);
        const data = JSON.parse(message)
        store.curRoomMemberList = data
    });

    socket.on('success', (message: string) => {
        console.log('[WS]收到通知 success: ' + message);
        toast.success(message)
    })

    socket.on('info', (message: string) => {
        console.log('[WS]收到通知 info: ' + message);
        toast.info(message)
    })

    socket.on('warning', (message: string) => {
        console.log('[WS]收到通知 warning: ' + message);
        toast.warning(message)
    })

    socket.on('error', (message: string) => {
        console.log('[WS]收到通知 error: ' + message);
        toast.error(message)
    })
}

// event

function sendMessage(message: string = ''): void {
    socket.emit('sendMessage', {
        text: message
    })
}

function switchRoom(room_id: string): void {
    socket.emit('switchRoom', {
        room_id
    })
}

function logout(): void {
    clearLoginState();
    router.push('/login');
}

</script>