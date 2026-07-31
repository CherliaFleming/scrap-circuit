import { useState } from 'react'
import './App.css'
import { FarmPickDrop } from './components/FarmPickDrop.jsx'
import { RestPickDrop } from './components/RestPickDrop.jsx'
import MainView from './views/MainView.jsx' //default export no curly braces

export const App = () => {
  return (
    <div className="App">
      <FarmPickDrop />
      <RestPickDrop />
    </div>
  )
}
export default App; 