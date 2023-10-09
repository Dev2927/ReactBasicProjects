import React from "react";

function User({ avatar, url, username }) {
  return (
    <div>
      <img src={avatar} alt="Loading" height="200" width="200" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {username}
      </a>
    </div>
  );
}

export default User;
