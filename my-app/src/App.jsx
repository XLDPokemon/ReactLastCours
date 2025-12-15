import { useEffect, useState } from 'react'
import './App.css'

function App() {  
  const [counter, setCounter] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const [totalTime, setTotalTime] = useState(null)

  const clicksToWin = 11

  useEffect(() => {
    // start game
    if (counter === 1 && startTime === null) {
      setStartTime(Date.now())
    }

    // win game
    if (counter === clicksToWin && startTime !== null) {
      const endTime = Date.now()
      const seconds = ((endTime - startTime) / 1000).toFixed(2)
      setTotalTime(seconds)
    }
  }, [counter, startTime])

  let message
  if (counter >= clicksToWin) {
    message = <p>You win 🎉</p>
  } else {
    message = <p>The goal is to click {clicksToWin} times</p>
  }

  return (
    <>
      <h2>Recap: Clicker Game</h2>

      {message}

      {totalTime && <p>Time: {totalTime} seconds</p>}

      <button
        onClick={() => setCounter(prev => prev + 1)}
        disabled={counter >= clicksToWin}
      >
        {counter}
      </button>
    </>
  )
}

export default App
