import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
    <Body/>
    </div>
  )
}

export default App
