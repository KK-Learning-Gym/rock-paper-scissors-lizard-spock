import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setPage, setScore, setChoice, setResult } from '../reducers/gameReducer'

const getRandomInt = max => {
	return Math.floor(Math.random() * Math.floor(max))
}

const getAngle = index => {
	return 18 * (1 + 4 * Number(index))
}

const Options = ({ options }) => {
	const dispatch = useDispatch()
	const choice = useSelector(state => state.choice)

	const choiceHook = () => {
		if (choice.player && choice.house) {
			const pickedOption = options.find(option => option.name === choice.player)
			if (choice.player === choice.house) {
				dispatch(setResult('draw'))
			} else if (pickedOption.beats.includes(choice.house)) {
				dispatch(setResult('win'))
				dispatch(setScore())
			} else {
				dispatch(setResult('lose'))
			}
			dispatch(setPage('result'))
		}
	}

	useEffect(choiceHook, [choice, dispatch])

	const handleSelect = event => {
		const playerChoice = event.target.getAttribute('value')

		const houseChoice = options[getRandomInt(options.length)]['name']

		const selectedChoice = {
			player: playerChoice,
			house: houseChoice,
		}
		dispatch(setChoice(selectedChoice))
	}

	if (options) {
		return (
			<div className="option-wrapper">
				{options.map((option, index) => (
					<div className={`option deg${getAngle(index)}`} key={option.name}>
						<img src={option.icon} value={option.name} alt={option.name} onClick={handleSelect} />
					</div>
				))}
			</div>
		)
	}
	return null
}

export default Options
