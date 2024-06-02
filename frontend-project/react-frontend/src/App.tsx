import { useState, useEffect } from "react";
import User from "./types/userType";
import UserList from "./UserList";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";
import "./styles/Modal.css";
import "./styles/SearchBar.css";
import "./styles/UserCard.css";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  
  const fetchUsers = async (searchTerm: string) => {
    const link = searchTerm
      ? `http://127.0.0.1:3000?term=${searchTerm}`
      : "http://127.0.0.1:3000";
    const response = await fetch(link);
    const data: User[] = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers("");
  }, []);

  const handleSearch = (term: string) => {
    fetchUsers(term);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <UserList users={users} />
    </div>
  );
};

export default App;
