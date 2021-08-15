import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { appReducers } from './store'
import App from './App'
import thunk from 'redux-thunk'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import common_en from './translations/en/common.json'

const store = createStore(appReducers, applyMiddleware(thunk))

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	resources: {
		en: {
			common: common_en
		}
	}
})

it('renders without crashing', () => {
	const app = renderer
		.create(
			<I18nextProvider i18n={i18next}>
				<Provider store={store}>
					<App />
				</Provider>
			</I18nextProvider>
		)
		.toJSON()

	expect(app).toMatchSnapshot()
})
