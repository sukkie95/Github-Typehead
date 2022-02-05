import React from "react";

const SearchForm = ({userInput, handleSubmit, setUserInput}) => {
    return ( 
        <div className="search">
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="search"
          type='search'
          value={userInput}
          onChange={(e)=> setUserInput(e.target.value)}
         />
        <button>submit</button>
      </form>
     </div>
     );
}
 
export default SearchForm;