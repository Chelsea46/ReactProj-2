import { useState, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Show from './pages/Show.jsx'
import Card from './components/Card.jsx'
import './App.css'

function App() {

  const [users, setUsers] = useState(null)
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/show">Show</Link></li>
      </ul>
    </nav>
    <div className='card-container'>
       {users && <Card users={users}/>}
      </div>
    <Routes>
      <Route path ="/show/" element={<Show/>}/>
    </Routes>
   </>
  )
}

export default App
