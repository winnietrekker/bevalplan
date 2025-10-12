import { useState } from 'react'
import './App.css'
import Overview from './pages/Overview.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Overview />
    </>
  )
}

export default App
