import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clear } from '../reducers/gameReducer'

const Result = () => {
	const dispatch = useDispatch()
	const result = useSelector(state => state.result)
	const choice = useSelector(state => state.choice)

	if (result !== 'unknown') {
		return (
			<div>
				<div>
					You picked {choice.player}. House picked {choice.house}.
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
