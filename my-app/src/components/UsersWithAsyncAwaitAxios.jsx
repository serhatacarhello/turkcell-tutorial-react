import axios from "axios";
import React, { useDebugValue, useEffect, useState } from "react";

function UsersWithAsyncAwaitAxios() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    (async () => {
      try {
        const { data: users } = await axios(`${baseUrl}/users`);
        const { data: posts } = await axios(
          `${baseUrl}/posts?userId=${users[0].id}`
        );

        setLoading(false);
        setUsers(users);
        setPosts(posts);
      } catch (error) {
        console.log("error message: ", error);
      }
    })();
  }, []);

  return <div>
    
    <h2>Users</h2>
    <ul>
      {users.map(user=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    <h2>Posts</h2>
    <ul>
      {
        posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
      }
    </ul>
  </div>;
}

export default UsersWithAsyncAwaitAxios;
