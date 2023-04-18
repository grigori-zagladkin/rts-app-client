import { getAuthUrl } from '@/config/api.config'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { getRefreshToken, saveToStorage } from './auth.helper'
import { axiosClassic } from '@/api/api.interceptor'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await axiosClassic<IAuthResponse>({
			url: getAuthUrl(`/${type}`),
			method: 'POST',
			data,
		})
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response.data
	},
	async refresh() {
		const refreshToken = getRefreshToken()
		const response = await axiosClassic.post<string, { data: IAuthResponse }>(getAuthUrl('/refresh'), {
			refreshToken,
		})
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response
	},
}
