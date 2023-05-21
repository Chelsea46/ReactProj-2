import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";

export default function Dropdown(){

    const {users, handleDrop} = useContext(UserContext)

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