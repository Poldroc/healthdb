import service from '@/utils/request'
import type { RegisterParams, registerResponseData, LoginParams, LoginResponseData } from './type'

enum API {
  REGISTER_API = '/user/register',
  LOGIN_API = '/user/login',
  USER_INFO_API = '/user/information'
}

export const reqRegister = (data: RegisterParams) => {
  return service.post<any, registerResponseData>(API.REGISTER_API, data)
}

export const reqLogin = (data: LoginParams) => {
  return service.post<any, LoginResponseData>(API.LOGIN_API, data)
}