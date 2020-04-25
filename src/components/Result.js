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
			<main className="result-wrapper">
				<div className="choice-wrapper">
					<div className="small-bottom-margin">YOU PICKED</div>
					<div className={`icon-wrapper result-icon border-color-${playerChoice.name}`}>
						<img src={playerChoice.icon} alt={playerChoice.name} />
					</div>
				</div>
				<div className="result-sub-wrapper">
					<div className="large">YOU {result.toUpperCase()}</div>
					<button onClick={() => dispatch(clear())} type="button" className="play-again-btn">
						PLAY AGAIN
					</button>
				</div>
				<div className="choice-wrapper">
					<div className="small-bottom-margin">THE HOUSE PICKED</div>
					<div className={`icon-wrapper result-icon border-color-${houseChoice.name}`}>
						<img src={houseChoice.icon} alt={houseChoice.name} />
					</div>
				</div>
			</main>
		)
	}
	return <>loading...</>
}

export default Result
