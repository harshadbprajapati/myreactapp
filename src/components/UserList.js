import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUser } from "./../store/users/actions";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const selectedUser = useSelector((state) =>
    state.users.users.find((user) => user.id === state.users.selectedUserId)
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleUserClick = (userId) => {
    dispatch(selectUser(userId));
  };

  console.log("UserList is rendered. users = ", users);

  return (
    <div>
      <h2>User List</h2>
      {users.loading && <p>Loading...</p>}
      {users.error && <p>Error: {users.error}</p>}
      <ul>
        {users.users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)} className="user-link">
            <strong>{user.name}</strong> - Birthdate: {user.birthDate},
            Profession: {user.occupation}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h3>{selectedUser.name}'s Content</h3>
          <iframe
            title="User Content"
            src={selectedUser.url}
            width="100%"
            height="400px"
          />
        </div>
      )}
    </div>
  );
};

export default UserList;

