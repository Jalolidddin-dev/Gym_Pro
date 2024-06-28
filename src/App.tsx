import { Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/navbar'
import Home from './pages/home'
import { ThemeProvider } from '@/components/provider/theme-provider'
import Auth from './pages/auth'

function App() {
	return (
		<div>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth' element={<Auth />} />
				</Routes>
			</ThemeProvider>
		</div>
	)
}

export default App
