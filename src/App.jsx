
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {
  

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/loginsignup' element={<Login/>}/>
    </Routes>
    
    </>
  )
}

export default App
