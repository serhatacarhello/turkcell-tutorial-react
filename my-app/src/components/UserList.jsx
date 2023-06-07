import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeUserId, setActiveUserId] = useState(null);
  const baseUrl = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    (async () => {
      try {
        const { data: users } = await axios(`${baseUrl}/users`);

        setUsers(users);
        setLoading(false);
      } catch (error) {
        console.log("Error message: ", error);
      }
    })();
  }, []);

  const showUserDetails = async (activeUserId) => {
    try {
      setLoading(true);
      const { data: userDetails } = await axios(
        `${baseUrl}/users/${activeUserId}`
      );
      setUserDetails(userDetails);
      setActiveUserId(activeUserId);
      setLoading(false);
    } catch (error) {
      console.log("error message: ", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="leftSide">
          <h2>User List</h2>
          {loading && <div>Loading...</div>}
          <div>
            <ul>
              {users.map((user) => (
                <li key={user.id} onClick={() => showUserDetails(user.id)}>
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rightSide">
          <h2>Details</h2>
          {activeUserId ? (
            <div>
              {loading ? (
                <div>Loading...</div>
              ) : (
                // <pre>
                //     {
                //         JSON.stringify(userDetails, null , 2)
                //     }
                // </pre>
                <div>
                  <ul>
                    <li>ID: {userDetails.id}</li>
                    <li>Name: {userDetails.name}</li>
                    <li>Username: {userDetails.username}</li>
                    <li>Email: {userDetails.email}</li>
                    <li>Phone: {userDetails.phone}</li>
                    <li>Website: {userDetails.website}</li>
                    <li>Company: {userDetails.company?.name}</li>
                    <li>Catch Phrase: {userDetails.company?.catchPhrase}</li>
                    <li>Business: {userDetails.company?.bs}</li>
                    <li>Street: {userDetails.address?.street}</li>
                    <li>Suite: {userDetails.address?.suite}</li>
                    <li>City: {userDetails.address?.city}</li>
                    <li>Zipcode: {userDetails.address?.zipcode}</li>
                    <li>Geo - Latitude: {userDetails.address?.geo?.lat}</li>
                    <li>Geo - Longitude: {userDetails.address?.geo?.lng}</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div>Please select a user to see details</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserList;
