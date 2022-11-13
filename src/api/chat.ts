import { RequestResult } from "@/core/types"
import { get, post } from "@/utils/requests"

const apiBase = import.meta.env.VITE_API_BASE + '/chat'

export function history(token: string, room_id: number): Promise<RequestResult> {
    return post(apiBase + '/history', { token, room_id })
}

export function roomInfo(id: number): Promise<RequestResult> {
    return get(apiBase + '/roomInfo?id=' + id)
}