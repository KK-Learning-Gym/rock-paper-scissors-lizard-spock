import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
	const score = useSelector(state => state.score)
	return (
		<>
			<div>Rock, Paper, Scissors, Lizard, Spock</div>
			<div>Score {score}</div>
		</>
	)
}

export default Header
