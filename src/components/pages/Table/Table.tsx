import { FC } from 'react'
import styles from './Table.module.css'

export const Table: FC = () => {
	return (
		<div className={styles.table}>
			<table className={styles.table}>
				<tr className={styles.tr}>
					<td className={styles.tdName}>Название сделки</td>
					<td className={styles.tdName}>Бюджет</td>
					<td className={styles.tdName}>id</td>
				</tr>
				<tr className={styles.tr}>
					<td className={styles.td}>16</td>
					<td className={styles.td}>14</td>
					<td className={styles.td}>10</td>
				</tr>
			</table>
		</div>
	)
}
