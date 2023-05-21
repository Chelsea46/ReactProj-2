import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import UserContextProvider from './contexts/UserContext.jsx'
import './App.css'

function App() {
//   // API call
//   const [users, setUsers] = useState([])
//   useEffect(() =>{
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data))
//   }, [])

//   // handle search from searchbar
//   const [searchTerm, setSearchTerm] = useState('')
//   const [dropdown, setDropdown] = useState('')
//   // callback handler for searchbar
//   function handleSearch(e){
//     setSearchTerm(e.target.value)
// }

// function handleDrop(e){
//   const searchCity = users.find((user) => user.address.city === e.target.value)
//   setDropdown(searchCity.address.city)
// }

// const selected = users.filter((user) => {
//   return user.address.city == dropdown
// })

// const searched = users.filter((user)=>{
//   return user.name.toLowerCase().includes(searchTerm.toLowerCase())
// })

  return (
    <> 
    <Routes>
     
      <Route path="/" element={<UserContextProvider> <Home/> </UserContextProvider>}/>
      <Route path='/user/:id' element={<UserContextProvider> <User/> </UserContextProvider>}/> 
     
    </Routes>
   </>
  )
}

export default App
