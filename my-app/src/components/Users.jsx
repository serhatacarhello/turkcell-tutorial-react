import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    // fetch usage
    //     fetch(`${baseUrl}/users`)
    //       .then((res) => res.json()) // parse
    //       .then((data) => setUsers(data))
    //       .finally(()=> setLoading(false))

    // axios usage
    /* axios(`${baseUrl}/userserr`)
      .then((res) => {
        setUsers(res.data);
        axios(`${baseUrl}/posts?userId=${res.data[0].id}`)
        .then((res) =>
          setPosts(res.data)
        )
      })
      .catch(err => (console.log('error message: ', err)))
      .finally(() => setLoading(false)); */
    getDataWithTryCatch();
  }, []);



  // async try catch usage

  const getDataWithTryCatch = async () => {
    try {
      const { data: users } = await axios(`${baseUrl}/users`);
      const { data: posts } = await axios(
        `${baseUrl}/posts?userId=${users[0].id}`
      );
      console.log("users: ", users);
      console.log("posts: ", posts);
      setLoading(false);
      setUsers(users);
      setPosts(posts);
    } catch (error) {
      console.log("error message: ", error);
    }
    console.log('getdatawithtrycatch')
  };

// anonymous function
const logUser= ()=> {
  console.log('Bismillah')
}
logUser();

(()=> {console.log('Bismillah Ya Allah')})();


  return (
    <div>
      <h2>Users</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
