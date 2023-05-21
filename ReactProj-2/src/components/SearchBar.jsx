import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";


export default function SearchBar(){

    const {search, handleSearch} = useContext(UserContext)

    return(
        <>
            <label htmlFor="search">
            <input type="text"
            id="search" 
            placeholder="Type to search"
             value={search}
            onChange={handleSearch} />
            </label>
        </>
    )
}