import {useState, useEffect, createContext} from 'react'


export const UserContext = createContext()

function UserContextProvider(props){

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
  const searchCity = users.find((user) => user.address.city === e.target.value)
  setDropdown(searchCity.address.city)
}

const selected = users.filter((user) => {
  return user.address.city == dropdown
})

const searched = users.filter((user)=>{
  return user.name.toLowerCase().includes(searchTerm.toLowerCase())
})

const value = {users, selected, searchTerm, searched, handleSearch, handleDrop}

    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider