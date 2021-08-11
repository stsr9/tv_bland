import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
	ROUTES,
	RenderRoutes,
} from './routes/routes'

function App(props: any) {
    const { t } = useTranslation('common')
    return (
        <div className='App'>
            <header className='App-header'>
                <h2>{t('mainTitle')}</h2>
            </header>
            <Router>
                <RenderRoutes {...props} routes={ROUTES} />
            </Router>
        </div>
    )
}

export default App
