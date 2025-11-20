import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>User Details</h1>
      <SearchBar search={search} setSearch={setSearch} />
      {filteredUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Home;
