import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'

import MainLayout from '@/components/layouts/MainLayout'

import { setupStore } from '@/store/index'

import AuthProvider from '../AuthProvider'
import { TypeComponentAuthFields } from '../AuthProvider/auth-page.types'
import HeadProvider from '../HeadProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={setupStore()}>
				<QueryClientProvider client={queryClient}>
					<AuthProvider Component={Component}>
						<ReduxToastr />
						<MainLayout>{children}</MainLayout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
