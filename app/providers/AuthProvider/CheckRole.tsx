import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeComponentAuthFields } from './auth-page.types'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const router = useRouter()
	if (!isOnlyAdmin && !isOnlyUser) {
		return <>{children}</>
	}
	if (user?.isAdmin) {
		return <>{children}</>
	}
	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}
	const isUser = user && !user.isAdmin
	if (isUser && isOnlyUser) {
		return <>{children}</>
	} else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
