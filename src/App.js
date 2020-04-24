import React, { useState } from 'react'
import './App.css'

const Header = ({ score }) => {
	return (
		<>
			<div>Rock, Paper, Scissors, Lizard, Spock</div>
			<div>
				Score
				{score}
			</div>
		</>
	)
}

const Options = ({ handleSelect, options }) => {
	return (
		<ul>
			{options.map((option) => (
				<li key={option} value={option} onClick={handleSelect}>
					{option}
				</li>
			))}
		</ul>
	)
}

const Result = ({ choices, optionsArray, result }) => {
	return (
		<>
			<div>
				You picked {choices.player}. House picked {choices.computer}.
			</div>
			<div>You {result}</div>
		</>
	)
}

const Again = ({ setPage }) => {
	return (
		<button onClick={() => setPage('home')} type="reset">
			Play Again
		</button>
	)
}

const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max))
}

const App = () => {
	const [page, setPage] = useState('home')
	const [score, setScore] = useState(0)
	const [choices, setChoices] = useState({ player: null, computer: null })
	const [result, setResult] = useState('unknown')

	const optionsArray = [
		{
			name: 'Rock',
			beats: ['Scissors', 'Lizard'],
		},
		{
			name: 'Paper',
			beats: ['Rock', 'Spock'],
		},
		{
			name: 'Scissors',
			beats: ['Paper', 'Lizard'],
		},
		{
			name: 'Lizard',
			beats: ['Paper', 'Spock'],
		},
		{
			name: 'Spock',
			beats: ['Rock', 'Scissors'],
		},
	]

	const options = optionsArray.map((option) => option.name)

	const handleSelect = (event) => {
		const playerChoice = event.target.getAttribute('value')
		const computerChoice = options[getRandomInt(options.length)]
		setChoices({
			player: playerChoice,
			computer: computerChoice,
		})

		const pickedOption = optionsArray.filter((option) => option.name === choices.player)[0]
		if (choices.player === choices.computer) {
			setResult('draw')
		} else if (pickedOption['beats'].includes(choices.computer)) {
			setResult('win')
			setScore(score + 1)
		} else {
			setResult('lose')
		}

		setPage('result')
	}

	if (page === 'home') {
		return (
			<>
				<Header score={score} />
				<Options handleSelect={handleSelect} options={options} />
			</>
		)
	}

	if (page === 'result') {
		return (
			<>
				<Header score={score} />
				<Result choices={choices} score={score} result={result} />
				<Again setPage={setPage} />
			</>
		)
	}
}

export default App
