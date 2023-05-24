import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import AddUser from './pages/AddUser.jsx'
import EditUser from './pages/EditUser.jsx'
import './App.css'

function App() {
  
  return (
    <> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/user/:id' element={ <User/>}/> 
      <Route path='/adduser' element={ <AddUser/> }/>
      <Route path='edituser/:id' element= { <EditUser/> }/>
    </Routes>
   </>
  )
}

export default App
