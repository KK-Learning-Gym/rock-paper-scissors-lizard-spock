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

const Options = ({ handleSelect }) => {
  const options = [Rock, Paper, Scissors, Lizard, Spock]
  return (
    <ul>
      {options.map((option) => (
        <li key={option}>{option}</li>
      ))}
    </ul>
  )
}

const App = () => {
  const [page, setPage] = useState('home')
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState({ player: null, computer: null })

  const handleSelect = () => {}

  if (page === 'home') {
    return (
      <>
        <Header />
        <Options handleSelect={handleSelect} />
      </>
    )
  }
}

export default App
