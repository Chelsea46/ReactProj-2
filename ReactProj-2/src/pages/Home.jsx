import Card from "../components/Card";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";

export default function Home() {
  const { users } = useContext(UserContext);

  return (
    <>
      <h1 className="title">YELLOW PAGES</h1>
      <Link to='/adduser'><p className="navigate">Add User</p></Link>
      <SearchBar />
      <Dropdown />
      <div className="card-container">
        {users && <Card users={users} />}
      </div>
    </>
  );
}