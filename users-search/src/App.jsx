import React, { useEffect, useState } from "react";
import "./index.scss";
import Users from "./Components/users/Users";

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("https://reqres.in/api/users")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setUsers(json.data);
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //     });
  // });

  return (
    <div className="App">
      <Users />
      {/* <Success /> */}
    </div>
  );
}

export default App;
