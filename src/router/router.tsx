import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/Home/Home'
import { Table } from '../components/pages/Table/Table'

function Router() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/table' element={<Table />} />
		</Routes>
	)
}

export default Router
