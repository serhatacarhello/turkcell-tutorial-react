import React, { useState } from "react";
import User from "./components/User";
import Colors from './components/Colors'
import Counter from "./components/Counter";
import Form from './components/Form'
import Users from "./components/Users";
import UsersWithAsyncAwaitAxios from "./components/UsersWithAsyncAwaitAxios";
import UserList from "./components/UserList";
function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="App">
      {/* <User/> */}
      {/* <Colors /> */}
      {/* <Form /> */}

      {/* {
           isVisible && <Counter />
      }

      <button onClick={()=> setIsVisible(!isVisible)}>{isVisible ? 'Hide ' : 'Show '} Counter</button> */}
      {/* <Users /> */}
     {/* <UsersWithAsyncAwaitAxios/> */}
 
     <UserList/>

     

    </div>
  );
}

export default App;
