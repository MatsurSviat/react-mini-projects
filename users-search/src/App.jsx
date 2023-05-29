import React, { useEffect, useState } from "react";
import { Success } from "./Components/Success";
import "./index.scss";
import Users from "./Components/users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [invite, setInvite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => setIsLoading(false));
  });

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id) => {
    if (invite.includes(id)) {
      setInvite((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvite((prev) => [...prev, id]);
    }
  };

  return (
    <div className="App">
      {success ? (
        <Success count={invite.length} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invite={invite}
          onClickInvite={onClickInvite}
          setSuccess={setSuccess}
        />
      )}
    </div>
  );
}

export default App;
