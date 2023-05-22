import {useState, useEffect, createContext} from 'react'
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext()

function UserContextProvider(props){
  
  const navigate = useNavigate();
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
// handle dropdown
function handleDrop(e){
  const searchCity = users.find((user) => user.address.city === e.target.value)
  setDropdown(searchCity.address.city)
}

// filter from city selection
const selected = users.filter((user) => {
  return user.address.city == dropdown
})

// filter from searchbar
const searched = users.filter((user)=>{
  return user.name.toLowerCase().includes(searchTerm.toLowerCase())
})

// form states
const [formData, setFormData] = useState({
  address:{city:''},
  company:{name:''},
  name: '',
  website: ''}
)
 console.log(users)
const [formError, setFormError] = useState({
  nameError: false,
  cityError: false,
  websiteError: false,
  companyError: false,
})

// handle change
function handleChange(e){
  setFormData(prevFormData => {
      return {
          ...prevFormData,
          [e.target.name]: e.target.value
      }
  })
}

// handle submit
const isValid = formData.name != '' && formData.address.city != '' && formData.website != '' && formData.company.name != '';

// update users
const updateUsers = (data) => {
  setUsers([
    ...users,
    {
      name: data.name,
      city: data.address.city,
      website : data.website,
      company: data.company.name
    }
  ])
}

function handleSubmit(event){
  event.preventDefault()
  const errors = {
      name: false,
      city: false,
      website: false,
      company: false
  }
  if(isValid){
      updateUsers(formData)
      setFormData({address:{city:''}, company:{name:''}, name:'', website:''})
      navigate("/")
  } if(formData.name === ''){
    errors.name = true
  }if(formData.address.city === ''){
      errors.city = true
  }if(formData.website === ''){
      errors.website = true
  }if(formData.company.name === ''){
      errors.company = true
  }else{
      setFormError(prevState => {
          return{
          ...prevState,
          nameError: false,
          cityError: false,
          websiteError: false,
          companyError:false,
          }
      })
  }
  setFormError(prevState => {
      return {...prevState,
          nameError: errors.name,
          cityError: errors.city,
          websiteError: errors.website,
          companyError: errors.company,
      }
  });
}

const value = {users, selected, searchTerm, searched, handleSearch, handleDrop, handleSubmit, formData, formError, handleChange}

    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider