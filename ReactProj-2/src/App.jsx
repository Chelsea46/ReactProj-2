import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
import SearchBar from './components/SearchBar.jsx'
import Dropdown from './components/Dropdown.jsx'
import './App.css'

function App() {
  // API call
  const [users, setUsers] = useState([])
  useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  // handle search from searchbar
  const [searchTerm, setSearchTerm] = useState('')
  // callback handler for searchbar
  function handleSearch(e){
    setSearchTerm(e.target.value)
    console.log(searchTerm)
}

const searched = users.filter((user)=>{
  return user.name.toLowerCase().includes(searchTerm.toLowerCase())
})

  return (
    <> 
    <SearchBar search={searchTerm} handleSearch={handleSearch}/>
    <Dropdown users = {users}/>
    <Routes>
     <Route path="/" element={<Home users={users} list={searched}/>}/>
     <Route path='/user/:id' element={<User users={users}/>}/> 
    </Routes>
   </>
  )
}

export default App
