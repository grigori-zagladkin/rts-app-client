import type { AppProps } from 'next/app'
import App from 'next/app'

import '@/assets/styles/globals.css'

import { TypeComponentAuthFields } from '@/providers/AuthProvider/auth-page.types'
import MainProvider from '@/providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}
MyApp.getInitialProps = async (appContext: any) => {
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps }
}

export default MyApp
