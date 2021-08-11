import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import {
	ROUTES,
	RenderRoutes,
} from './routes/routes'

function App(props: any) {
    return (
        <div className="App">
            <header className="App-header">
                <h2>TV BLAND</h2>
            </header>
            <Router>
                <RenderRoutes {...props} routes={ROUTES} />
            </Router>
        </div>
    )
}

export default App
