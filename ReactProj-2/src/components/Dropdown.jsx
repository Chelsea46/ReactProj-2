
export default function Dropdown({users, handleDrop}){
    return(
        <>
             <select id = "dropdown" onChange={handleDrop}>
                {users.map((user) => {
                    return(
                            <option key={user.id} value={user.address.city}>
                                {user.address.city}
                            </option>
                            )
                        })}
            </select>      
        </>
    )
}