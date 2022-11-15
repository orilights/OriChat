export interface RequestResult {
    code: number,
    msg: string
}

export interface RoomInfoSimple {
    id: string,
    title: string,
}

export interface RoomInfo {
    id: number,
    ownerId: number,
    title: string,
    introduction: string,
    notice: string,
    status: number,
    needPassword: number,
}

export interface RoomMember {
    id: number,
    nickname: string,
}

export interface Message {
    id: number,
    type: number,
    senderId: number,
    text: string,
    quoteMessageId: number,
    status: number,
    createdAt: string,
    user: {
        nickname: string,
        avatar: string
    }
}