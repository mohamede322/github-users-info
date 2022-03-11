import "./sass/style.css";
import React, { useState } from "react";
import Input from "./components/Input";
import User from "./components/User";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const api = `https://api.github.com/users/${inputValue}`;
  function getUserData() {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setUserData(data));
    setIsSearching(true);
  }
  function handleChange(e) {
    const { value } = e.target;
    setInputValue(value);
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      getUserData();
    } else {
      return;
    }
  }
  return (
    <div className="App">
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={getUserData}> Get User </button>
      {isSearching ? (
        userData.message === undefined ? (
          <User userData={userData} />
        ) : (
          <h1> no users found </h1>
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
