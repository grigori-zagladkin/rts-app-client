import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

import { titleMerge } from '@/config/seo.config'

import { onlyText } from '../string/only-text'

import { ISeo } from './meta.interface'

const Meta: FC<PropsWithChildren<ISeo>> = ({ title, image, description, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta itemProp='description' name='description' content={onlyText(description, 152)} />
						<link rel='canonical' href={currentUrl} />
						<meta property='og:locale' content='ru' />
						<meta property='og:title' content={titleMerge(title)} />
						<meta property='og:url' content={currentUrl} />
						{image && <meta property='og:image' content={image} />}
						<meta property='og:description' content={onlyText(description, 197)} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
				{children}
			</Head>
		</>
	)
}

export default Meta