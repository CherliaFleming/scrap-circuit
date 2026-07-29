import { useState } from 'react'
import './App.css'
import { FarmPickDrop } from './components/FarmPickDrop.jsx'
import { RestPickDrop } from './components/RestPickDrop.jsx'
export const App = () => {
  return (
    <div className="App">
      <FarmPickDrop />
      <RestPickDrop />
    </div>
  )
}
export default App; 