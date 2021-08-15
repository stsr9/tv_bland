import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import 'font-awesome/css/font-awesome.min.css'
import { useHistory } from 'react-router-dom'

import { ROUTES, RenderRoutes } from './routes/routes'

function App(props: any) {
	const { t } = useTranslation('common')
	const Logo = () => {
		const history = useHistory()
		const goHome = () => history.push('/home')
		return (
			<h2 className="logo" onClick={goHome}>
				{t('mainTitle')}
			</h2>
		)
	}

	return (
		<div className="app">
			<Router>
				<header className="app-header">
					<Logo />
				</header>
				<RenderRoutes {...props} routes={ROUTES} />
			</Router>
		</div>
	)
}

export default App
