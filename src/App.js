import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Options from './components/Options'
import Result from './components/Result'

const Container = props => {
	return (
		<div className="page-wrapper">
			<Header /> {props.children}
		</div>
	)
}

const App = () => {
	const page = useSelector(state => state.page)

	switch (page) {
		case 'home':
			return (
				<Container>
					<Options />
				</Container>
			)
		case 'result':
			return (
				<Container>
					<Result />
				</Container>
			)
		default:
			return (
				<Container>
					<Options />
				</Container>
			)
	}
}

export default App
