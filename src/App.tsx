import styles from './App.module.css'
import { Header } from './components/Header/Header'
import Router from './router/router'

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<Router />
		</div>
	)
}

export default App
