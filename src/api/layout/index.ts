import request from '/@/utils/request'
import { AxiosResponse } from 'axios'
import { IMenubarList } from '/@/type/store/layout'

const api = {
    login: '/api/admin/login',
    getUser: '/api/admin/user',
    getRouterList: '/api/admin/router',
    publickey: '/api/User/Publickey'
}

export interface loginParam {
    username: string,
    password: string
}

export interface AccessToken {
    access_token: string,
    refresh_token: string,
    expired_in: number
}

export function login(param: loginParam):Promise<AxiosResponse<IResponse<AccessToken>>> {
    return request({
        url: api.login,
        method: 'post',
        data: param
    })
}

export function publickey():Promise<AxiosResponse<IResponse<string>>> {
    return request({
        url: api.publickey,
        method: 'get'
    })
}

interface IGetuserRes {
    name: string
    role: Array<string>
}

export function getUser(): Promise<AxiosResponse<IResponse<IGetuserRes>>> {
    return request({
        url: api.getUser,
        method: 'get'
    })
}
export function getRouterList(): Promise<AxiosResponse<IResponse<Array<IMenubarList>>>> {
    return request({
        url: api.getRouterList,
        method: 'get'
    })
}