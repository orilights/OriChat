import { RequestResult } from "@/core/types"
import { get, post } from "@/utils/requests"

const apiBase = import.meta.env.VITE_API_BASE + '/user'

export function login(username: string, password: string): Promise<RequestResult> {
    return post(apiBase + '/login', { username, password })
}

export function register(username: string, password: string, nickname: string, email: string, sex: number): Promise<RequestResult> {
    return post(apiBase + '/register', { username, password, nickname, email, sex })
}

export function verify(token: string): Promise<RequestResult> {
    return post(apiBase + '/verify', { token })
}

export function info(id: string): Promise<RequestResult> {
    return get(apiBase + '/info?id=' + id)
}