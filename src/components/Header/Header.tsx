import { FC } from 'react'
import { WiAlien } from 'react-icons/wi'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<WiAlien className={styles.icon} />
			<div className={styles.links}>
				<Link className={styles.link} to='/'>
					Главная
				</Link>
				<Link className={styles.link} to='/table'>
					Таблица
				</Link>
			</div>
		</div>
	)
}
