import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import AddUser from './pages/AddUser.jsx'
import UserContextProvider from './contexts/UserContext.jsx'
import './App.css'

function App() {

  return (
    <> 
    <Routes>
      <Route path="/" element={<UserContextProvider> <Home/> </UserContextProvider>}/>
      <Route path='/user/:id' element={<UserContextProvider> <User/> </UserContextProvider>}/> 
      <Route path='/adduser' element={<UserContextProvider> <AddUser/> </UserContextProvider>}/>
    </Routes>
   </>
  )
}

export default App
