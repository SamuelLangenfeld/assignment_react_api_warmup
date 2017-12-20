import React from "react";

// Custom card component for each user's data
const UserCard = ({ user, onDelete, onEditForm }) => {
  const { first_name, last_name, avatar } = user;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.

  return (
    <div className="UserCard card" style={{ maxWidth: "128px" }}>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
      </div>
      <div className="card-block">
          <button onClick={onDelete} id={user.id}>
            Delete User
          </button>
      </div>
      <div className="card-block">
          <button onClick={onEditForm} id={`edit${user.id}`}>
            Edit User
          </button>
      </div>
    </div>
  );
};

export default UserCard;
