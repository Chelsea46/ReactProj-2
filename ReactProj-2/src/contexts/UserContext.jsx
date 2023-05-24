import {useState, useEffect, createContext} from 'react'
import { useParams, useNavigate } from "react-router-dom"


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
 
const [formError, setFormError] = useState({
  nameError: false,
  cityError: false,
  websiteError: false,
  companyError: false,
})

// handle change
function handleChange(e) {
  const { name, value } = e.target;
  if (name === 'name') {
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: value
    }));
  } else if (name === 'address.city') {
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: {
        ...prevFormData.address,
        city: value
      }
    }));
  } else if (name === 'website') {
    setFormData((prevFormData) => ({
      ...prevFormData,
      website: value
    }));
  } else if (name === 'company.name') {
    setFormData((prevFormData) => ({
      ...prevFormData,
      company: {
        ...prevFormData.company,
        name: value
      }
    }));
  }
}


// FORM FUNCTIONS FOR BOTH ADD AND EDIT USER

const {id} = useParams()
    const intId = parseInt(id)

    const navigate = useNavigate();
    
    const updateUsers = (data) => {
        setUsers([
          ...users,
          {
             id: users.length +1,
            name: data.name,
            address:{city: data.address.city},
            website : data.website,
            company:{name: data.company.name}
          }
        ])
      }

      const isValid = formData.name != '' && formData.address.city != '' && formData.website != '' && formData.company.name != '';

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



const value = {setFormError, handleSubmit, setUsers, users, selected, searchTerm, searched, handleSearch, handleDrop, setFormData, formData, formError, handleChange}
    return(
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider