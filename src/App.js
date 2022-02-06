import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";

import "./index.css";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [userInput, setUserInput] = useState("");

//Fetch data From github Api, it takes usernames their profile link, Timer is for controlling Api request speed

  useEffect(() => {
    const ModifiedUserInput = userInput.trim().toLowerCase();
    if (ModifiedUserInput === ""){ return;}
const timer = setTimeout(() => {


    fetch(
      `https://api.github.com/search/users?q=${ModifiedUserInput}&in:login&per_page=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
    }, 2000);
   
    return () => clearTimeout(timer);

  }, [userInput]);
  console.log(userData);


  return (
    <div className="App">
      <p className="header">Typehead</p>
      <SearchForm
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <Card userInput={userInput} userData={userData} />
    </div>
  );
};

export default App;
