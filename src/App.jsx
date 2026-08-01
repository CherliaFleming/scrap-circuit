import './App.css'
import { FarmPickDrop } from './components/FarmPickDrop.jsx'
import { RestPickDrop } from './components/RestPickDrop.jsx'
import MainView from './views/MainView.jsx' //default export no curly braces
import { Routes, Route } from 'react-router-dom'
import { Login } from './forms/Login.jsx'
import { Register } from './forms/Register.jsx'
import { FarmView } from './views/FarmView.jsx'

export const App = () => {
  return (
    <div className="App">
    <Routes>
     <Route path="/" element={<MainView />}/>
     <Route path="/farmer" element={<FarmView />}/>
     <Route path="/restaurant" element={<RestPickDrop />}/>
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
    </Routes>
    </div>
  )
}
