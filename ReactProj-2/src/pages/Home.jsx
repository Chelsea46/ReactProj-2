import Card from "../components/Card";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";

export default function Home() {
  const { users } = useContext(UserContext);

  return (
    <>
      <SearchBar />
      <Dropdown />
      <div className="card-container">
        {users && <Card users={users} />}
      </div>
    </>
  );
}