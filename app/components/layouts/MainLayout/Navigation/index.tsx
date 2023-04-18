import Link from 'next/link'
import { FC } from 'react'

import { getDevelopmentsUrl } from '@/config/url.config'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.logo}>logo</div>
			<nav className={styles.navigation}>
				<ul>
					<li className={styles.nav_item}>
						<Link href={getDevelopmentsUrl(``)}>Разработки</Link>
					</li>
					<li className={styles.nav_item}>
						<Link href={getDevelopmentsUrl(``)}>Сотрудники</Link>
					</li>
					<li className={styles.nav_item}>
						<Link href={getDevelopmentsUrl(``)}>Компетенции</Link>
					</li>
					<li className={styles.nav_item}>
						<Link href={getDevelopmentsUrl(``)}>Курсы</Link>
					</li>
					<li className={styles.nav_item}>
						<Link href={getDevelopmentsUrl(``)}>Новости</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navigation
