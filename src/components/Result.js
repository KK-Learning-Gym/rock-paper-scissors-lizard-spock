import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clear } from '../reducers/gameReducer'

const Result = ({ options }) => {
	const dispatch = useDispatch()
	const result = useSelector(state => state.result)
	const choice = useSelector(state => state.choice)
	const playerChoice = options.find(option => option.name === choice.player)
	const houseChoice = options.find(option => option.name === choice.house)

	if (result !== 'unknown') {
		return (
			<div>
				<div>
					You picked <img src={playerChoice.icon} alt={playerChoice.name} />
				</div>
				<div>
					House picked <img src={houseChoice.icon} alt={houseChoice.name} />.
				</div>
				<div>You {result}</div>
				<button onClick={() => dispatch(clear())} type="button">
					Play Again
				</button>
			</div>
		)
	}
	return <>loading...</>
}

export default Result
