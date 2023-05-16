import { Link, useParams} from "react-router-dom"


export default function Card( {users, list}){
    if(list.length > 0){    
    return(
     <>
        {list.map((user) => {
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
} 