import React from "react";

const Card = ({ userData, userInput }) => {
  
  if(!userData)return ''
  return (
    <div className="main">
      {userData.items
        .filter((val) => {
          if (userInput === "") {
            return "";
          } else if (val.login.startsWith(userInput.trim().toLowerCase())) {
            return val;
          }
        })
        .map((val, key) => (
          <a href={val.html_url} target="blank" key={val.login}>
            <div className="card" key="key">
              <div className="image">
                <div>
                  <img src={val.avatar_url} alt="profile" />
                </div>
                <div>
                  <p>{val.login}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
};

export default Card;
