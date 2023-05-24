import { Link, useNavigate} from "react-router-dom"
import { useContext } from "react"
import {UserContext} from "../contexts/UserContext"


export default function Card(){
    
    const navigate = useNavigate()

    const {searched, selected, setUsers} = useContext(UserContext)
    
    function removeUser(id){
       setUsers(prevUser => prevUser.filter((user => user.id !== id)))
       navigate('/')
    }

    const filteredUsers = searched.length > 0 && searched.filter((user) => {
        if (selected.length > 0){
        return user.address.city === selected[0]?.address.city
        }
        return user
    })

    return(
     <>
        {searched.length > 0 && filteredUsers.map((user) => {
            return(
                
                     <div className='card' key={user.id}>
                        <Link to={`/user/${user.id}`}> <h2>{user.name}</h2> </Link>
                        <p><strong>City:</strong> {user.address.city}</p>
                        <Link to={`/edituser/${user.id}`}> <button>Edit</button> </Link>
                        <button onClick={() => removeUser(user.id)}>Delete</button>
                    </div>
            ) 
        })}
     </>
    )
} 