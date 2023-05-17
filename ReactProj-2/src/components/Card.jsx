import { Link} from "react-router-dom"


export default function Card( { list, selected}){

   const match = []
    // if you want to be more clever...
    let result = list.map((user) => {
        selected.map((city)=>{
            if(user.id === city.id){
                match.push(user)
            }
        })
    })

    console.log(list)
    
    if(list.length > 0){    
    return(
     <>
        {list.map((user) => {
            return(
                <Link to={`/user/${user.id}`} key={user.id}>
                   {match.length === 0 && <div className='card'>
                        <h2>{user.name}</h2>
                        <p><strong>City:</strong> {user.address.city}</p>
                    </div>}
                    {match.length > 0 && <div className='card'>
                        <h2>{match[0].name}</h2>
                        <p><strong>City:</strong> {match[0].address.city}</p>
                    </div>}
                </Link>
            )
        })}
     </>
    )
    }

} 