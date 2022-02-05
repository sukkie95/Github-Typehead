import React from "react";

const SearchForm = ({userInput, handleSubmit, setUserInput}) => {
    return ( 
        <div className="search">
      
        <input 
          placeholder="Search Users"
          type='search'
          value={userInput}
          onChange={(e)=> setUserInput(e.target.value)}
         />
        <button onSubmit={handleSubmit}>GO</button>
     
     </div>
     );
}
 
export default SearchForm;