import { useContext, useState} from "react"
import {UserContext} from "../contexts/UserContext"
import { useParams, useNavigate } from "react-router-dom"

export default function EditUser(){

    const {users, setUsers} = useContext(UserContext)

    const navigate = useNavigate()

    const {id} = useParams()
    const intId = parseInt(id)

    const [editFormData, setEditFormData] = useState({
        address:{city:''},
        company:{name:''},
        name: '',
        website: ''}
      )

    function editFormChange(e){
        const { name, value } = e.target;
        if (name === 'name') {
          setEditFormData((prevFormData) => ({
            ...prevFormData,
            name: value
          }))
        } else if (name === 'address.city') {
          setEditFormData((prevFormData) => ({
            ...prevFormData,
            address: {
              ...prevFormData.address,
              city: value
            }
          }))
        } else if (name === 'website') {
          setEditFormData((prevFormData) => ({
            ...prevFormData,
            website: value
          }))
        } else if (name === 'company.name') {
          setEditFormData((prevFormData) => ({
            ...prevFormData,
            company: {
              ...prevFormData.company,
              name: value
            }
          }))
        }
    }

    const editUserUpdate = (data) => {
        const updatedUsers = users.map((user) => {
          if (user.id === intId) {
            return {
              id: user.id,
              name: data.name,
              address: {
                city: data.address.city
              },
              website: data.website,
              company: {
                name: data.company.name
              }
            }
          }
          return user
        })
      
        setUsers(updatedUsers)
      }

    function handleUpdate(e){
        e.preventDefault()
        editUserUpdate(editFormData)
        setEditFormData({address:{city:''}, company:{name:''}, name:'', website:''})
        navigate("/")
    }

    const filteredUsers = users.filter(user => { 
        return intId === user.id
    })

    if(filteredUsers.length > 0){
    return(
        <form onSubmit={handleUpdate}>
        <input type="text" name="name" placeholder={filteredUsers[0].name} value = {editFormData.name} onChange={editFormChange}/>
        <input type="text" name='address.city' placeholder={filteredUsers[0].address.city} value = {editFormData.address.city} onChange={editFormChange}/>
        <input type="text" name="website" placeholder={filteredUsers[0].website} value = {editFormData.website} onChange={editFormChange} />
        <input type="text" name='company.name' placeholder={filteredUsers[0].company.name} value = {editFormData.company.name} onChange={editFormChange} />
        <button className="form-btn">Edit</button>
    </form>
       )
    }
}