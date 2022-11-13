import { useStore } from "@/stores"

export function clearLoginState(){
    const store = useStore()

    store.login = false
    store.token = ''
    store.userId = '-1'

    localStorage.clear()
}