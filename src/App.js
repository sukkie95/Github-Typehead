import React, {useState, useEffect} from "react";
import ReactDOM  from "react";
import  Card from "./components/Card";
import SearchForm from "./components/SearchForm";

import './index.css';

const App=()=>{

 const[userData, setUserData] = useState([]);
 const[userInput, setUserInput] = useState('');

 

 
  useEffect(()=>{
  
 
   
    fetch(`https://api.github.com/users`)
    .then(res => res.json())
    .then(data => {
        setUserData(data);
        
    }); 
  }, [userInput]);

function handleSubmit(e){
  e.preventDefault();

  fetch(`https://api.github.com/users`)
    .then(res => res.json())
    .then(data => {
        setUserData(data);
        
    },[userInput]); 
}
 

  return(
    <div className="App">
   <p className="header">Typehead</p>
       <SearchForm userInput={userInput} handleSubmit={handleSubmit} setUserInput={setUserInput}/>
       <Card userInput={userInput} userData = {userData} />
   </div>
  );
}

export default App;