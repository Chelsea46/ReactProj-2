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
                <>
                     <div className='card' key={user.id}>
                        <div className="card-content">
                            <Link to={`/user/${user.id}`}> <h2>{user.name}</h2> </Link>
                            <p><strong>City:</strong> {user.address.city}</p>
                            <div className="btn-container">
                                <Link to={`/edituser/${user.id}`}> <button className="edit-btn">Edit</button> </Link>
                                <button className="delete-btn" onClick={() => removeUser(user.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </>
            ) 
        })}
     </>
    )
} 