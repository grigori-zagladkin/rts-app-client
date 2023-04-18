import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'

import { TypeComponentAuthFields } from './auth-page.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const { logout, checkAuth } = useActions()
	const { pathname } = useRouter()
	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) {
			checkAuth()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	useEffect(() => {
		const refreshToken = getRefreshToken()
		if (!refreshToken && user) {
			logout()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])
	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>{children}</DynamicCheckRole>
	)
}

export default AuthProvider
