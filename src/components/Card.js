import React from "react";


const Card = ({userData, userInput}) => {
    return ( 
   <div className="main">
     {userData.filter((val)=>{
      if(userInput==='' ){
        return ''
      } else if(val.login.startsWith(userInput.toLowerCase())){
        return val
      }
    

    }).map((val, key)=>(
      <a href={val.html_url} target="blank">
    <div className="card" key='key'>
    
      <div className="image">
        <div><img src={val.avatar_url} /></div>
        <div><p>{val.login}</p></div> </div>
      

  
    </div>
    </a>
    ))}
       
         
   </div>
    )
}
 
export default Card;