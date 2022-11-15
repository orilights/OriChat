import { Message, RoomInfo, RoomInfoSimple, RoomMember } from '@/core/types'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        login: false,
        token: '',
        networkLoading: false,

        // 当前登录用户信息
        userId: '',
        userName: '加载中',
        userNickname: '加载中',
        userEmail: '加载中',
        userSex: 0,
        userStatus: 0,
        userAvatar: '',
        userSign: '加载中',

        // 全局信息
        roomList: [] as RoomInfoSimple[],

        // 当前房间信息
        curRoomId: 1,
        curRoomInfo: {} as RoomInfo,
        curRoomMemberList: [] as RoomMember[],
        curRoomMessageList: [] as Message[],
    }),
})