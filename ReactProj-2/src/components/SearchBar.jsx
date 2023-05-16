import { useState } from "react"

export default function SearchBar({handleSearch, search}){
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