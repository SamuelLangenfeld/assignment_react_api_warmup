import React from "react";

// Custom card component for each user's data
const UserCard = ({ user, onDelete }) => {
  const { first_name, last_name, avatar } = user;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  console.log("========HERE I AM=========");
  console.log(user.id);
  return (
    <div className="UserCard card" style={{ maxWidth: "128px" }}>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
      </div>
      <div className="card-block">
        <a>
          <h4 onClick={onDelete} id={user.id}>
            Delete User
          </h4>
        </a>
      </div>
    </div>
  );
};

export default UserCard;
