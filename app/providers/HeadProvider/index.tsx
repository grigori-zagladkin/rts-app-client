import { Head } from 'next/document'
import NextProgressBar from 'nextjs-progressbar'
import { FC, Fragment, PropsWithChildren } from 'react'

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Fragment>
			<NextProgressBar height={3} stopDelayMs={200} startPosition={0.3} />
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0' />
				<meta name='theme-color' content='#181B1E' />
				<meta name='msapplication-navbutton-color' content='#181B1E' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#181B1E' />
			</Head>
			{children}
		</Fragment>
	)
}

export default HeadProvider
