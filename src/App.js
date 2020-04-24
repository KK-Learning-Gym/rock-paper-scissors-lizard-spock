import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Options from './components/Options'
import Result from './components/Result'

import Rock from './assets/icon-rock.svg'
import Paper from './assets/icon-paper.svg'
import Scissors from './assets/icon-scissors.svg'
import Lizard from './assets/icon-lizard.svg'
import Spock from './assets/icon-spock.svg'

const Container = props => {
	return (
		<div className="page-wrapper">
			<Header /> {props.children}
		</div>
	)
}

const App = () => {
	const options = [
		{
			name: 'Rock',
			beats: ['Scissors', 'Lizard'],
			icon: Rock,
		},
		{
			name: 'Paper',
			beats: ['Rock', 'Spock'],
			icon: Paper,
		},
		{
			name: 'Scissors',
			beats: ['Paper', 'Lizard'],
			icon: Scissors,
		},
		{
			name: 'Lizard',
			beats: ['Paper', 'Spock'],
			icon: Lizard,
		},
		{
			name: 'Spock',
			beats: ['Rock', 'Scissors'],
			icon: Spock,
		},
	]

	const page = useSelector(state => state.page)

	switch (page) {
		case 'home':
			return (
				<Container>
					<Options options={options} />
				</Container>
			)
		case 'result':
			return (
				<Container>
					<Result options={options} />
				</Container>
			)
		default:
			return (
				<Container>
					<Options options={options} />
				</Container>
			)
	}
}

export default App
