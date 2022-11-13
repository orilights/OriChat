import { RequestResult } from "@/core/types"

export async function post(url: string, body: any) {
    let result: RequestResult = {
        code: -1,
        msg: ''
    }

    let response: Response
    try {
        response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(body)
        })
    } catch (err) {
        result.code = -1
        result.msg = '服务器或网络错误'
        return result
    }

    const json: any = await response.json()
    if (!response.ok) {
        if (response.status === 400) {
            result.code = 1
            result.msg = json['message'] || '未知错误'
        }
        return result
    }

    result.code = 0
    result.msg = JSON.stringify(json)

    return result
}

export async function get(url: string) {
    let result: RequestResult = {
        code: -1,
        msg: ''
    }

    let response: Response
    try {
        response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Cache-Control': 'no-cache'
            },
        })
    } catch (err) {
        result.code = -1
        result.msg = '服务器或网络错误'
        return result
    }

    const json: any = await response.json()
    if (!response.ok) {
        if (response.status === 400) {
            result.code = 1
            result.msg = json['message'] || '未知错误'
        }
        return result
    }

    result.code = 0
    result.msg = JSON.stringify(json)

    return result
}