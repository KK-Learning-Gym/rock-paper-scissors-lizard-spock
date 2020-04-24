import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Options from './components/Options'
import Result from './components/Result'

const App = () => {
	const page = useSelector(state => state.page)

	if (page === 'home') {
		return (
			<>
				<Header />
				<Options />
			</>
		)
	}

	if (page === 'result') {
		return (
			<>
				<Header />
				<Result />
			</>
		)
	}
}

export default App
