import React, { useState, useEffect } from "react";
function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/activities/")
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error("Error fetching leaderboard:", error));
  }, []);
    console.log(activities);
  return (
    <div>
      Activities
      <table>
        <thead>
            <tr>
                <th>User</th>
                <th>Activity Type</th>
                <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            {activities.map((entry) => {             
              return(
              <tr key={entry._id}>
                <td>{entry.user.name}</td>
                <td>{entry.activity_type}</td>
                <td>{entry.duration}</td>
              </tr>
            )})}
        </tbody>
      </table>
    </div>
  );
}
export default Activities;
