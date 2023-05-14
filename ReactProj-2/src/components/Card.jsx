import { useParams }from 'react-router-dom'

export default function Card( {users}){
    const {id} = useParams()
    return(
     <div>
        {users.map(function (user)  {
            return(
                <div className='card' key={user.id}>
                    <h2>{user.name}</h2>
                    <p><strong>City:</strong> {user.address.city}</p>
                </div>
            )
        })}
     </div>
    )
}