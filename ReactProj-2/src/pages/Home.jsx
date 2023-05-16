import { Link } from "react-router-dom"
import Card from "../components/Card" 


export default function Home({users, list}){
    return(
        <>
            <div className='card-container'>
                {users && <Card users={users} list={list}/>}
            </div>
        </>
    )
}