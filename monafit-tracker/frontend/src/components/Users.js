import React, { useState, useEffect } from "react";
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/users/")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching leaderboard:", error));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((entry) => {
            return(            
            <tr key={entry._id}>
              <td>{entry.username}</td>
              <td>{entry.email}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}
export default Users;
