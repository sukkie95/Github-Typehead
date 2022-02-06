import React from "react";

const SearchForm = ({userInput,  setUserInput}) => {
    return ( 
        <div className="search">
      
        <input 
          placeholder="Search Users"
          type='search'
          value={userInput}
          onChange={(e)=> setUserInput(e.target.value)}
         />
         
     </div>
     );
}
 
export default SearchForm;
