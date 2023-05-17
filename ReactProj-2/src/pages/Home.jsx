import Card from "../components/Card" 
import SearchBar from "../components/SearchBar"
import Dropdown from "../components/Dropdown"


export default function Home({users, list, search, selected, handleSearch, handleDrop}){
    return(
        <>
            <SearchBar search={search} handleSearch={handleSearch}/>
            <Dropdown users={users} handleDrop={handleDrop}/>
            <div className='card-container'>
                {users && <Card users={users} list={list} selected={selected}/>}
            </div>
        </>
    )
}