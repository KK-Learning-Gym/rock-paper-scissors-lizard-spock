import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import gameReducer from './reducers/gameReducer'

const store = createStore(gameReducer)

store.subscribe(() => {
	const storeNow = store.getState()
	console.log(storeNow)
})

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)
