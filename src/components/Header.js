import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.svg'

const Header = () => {
	const score = useSelector(state => state.score)
	return (
		<header className="header-wrapper">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div className="score-wrapper">
				<div className="blue">SCORE</div>
				<div className="large">{score}</div>
			</div>
		</header>
	)
}

export default Header
