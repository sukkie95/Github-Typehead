import React from "react";


const Card = ({userData, userInput}) => {
    return ( 
   <div>
     {userData.filter((val)=>{
      if(userInput==='' ){
        return ''
      } else if(val.login.startsWith(userInput.toLowerCase())){
        return val
      }
    

    }).map((val, key)=>(
    <div className="card" key='key'>
     <div className="result">
      <div className="image"><img src={val.avatar_url} /></div> 
       <div className="username"><p>{val.login}</p></div>
       <div className="profile-link"><p><a href={val.html_url} target='blank'>Profile</a></p></div>
   
      
</div>
  
</div>

    ))}
       
         
   </div>
    )
}
 
export default Card;