import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import User from './pages/User.jsx'
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
  const [dropdown, setDropdown] = useState('')
  // callback handler for searchbar
  function handleSearch(e){
    setSearchTerm(e.target.value)
}

function handleDrop(e){
  // setDropdown(e.target.value)
  // console.log(dropdown)
  const searchCity = users.find((user) => user.address.city === e.target.value)
  setDropdown(searchCity.address.city)
  console.log(dropdown)
}

const searched = users.filter((user)=>{
  return user.name.toLowerCase().includes(searchTerm.toLowerCase())
})

  return (
    <> 
    <Routes>
     <Route path="/" element={<Home users={users}
        list={searched}
        search={searchTerm}
        handleSearch={handleSearch}
        handleDrop={handleDrop}/>}/>
     <Route path='/user/:id' element={<User users={users}/>}/> 
    </Routes>
   </>
  )
}

export default App
