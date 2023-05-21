import { Link} from "react-router-dom"
import { useContext } from "react"
import {UserContext} from "../contexts/UserContext"

export default function Card(){
       
    const {searched, selected} = useContext(UserContext)

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
                <Link to={`/user/${user.id}`} key={user.id}>
                     <div className='card'>
                        <h2>{user.name}</h2>
                        <p><strong>City:</strong> {user.address.city}</p>
                    </div>
                </Link>
            ) 
        })}
     </>
    )
} 