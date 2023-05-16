
export default function Dropdown({users}){
    return(
        <>
             <select id = "dropdown">
                {users.map((user) => {
                    console.log(user.address.city)
                    return(
                            <option key={user.id} value="{user.address.city}">{user.address.city}</option>
                            )
                        })}
            </select>      
        </>
    )
}