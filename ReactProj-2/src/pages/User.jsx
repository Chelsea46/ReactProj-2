import { useParams } from "react-router-dom"

export default function User({users}){
    const {id} = useParams()
    const intId = parseInt(id)

    const filteredUsers = users.filter(user => { 
        return intId === user.id
    })

    if(filteredUsers.length > 0){
    return(
        <div className="user-card-container">
            <div className='user-card' key={filteredUsers[0].id} >
                <h2>{filteredUsers[0].name}</h2>
                <p><strong>City:</strong> {filteredUsers[0].address.city}</p>
                <p><strong>Email:</strong> {filteredUsers[0].email}</p>
                <p><strong>Website:</strong> {filteredUsers[0].website}</p>
                <p><strong>Company:</strong> {filteredUsers[0].company.name}</p>
            </div>    
        </div>
       )
    }
}