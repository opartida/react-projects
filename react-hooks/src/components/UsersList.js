import React from "react";

const UsersList = ({ data, setData }) => {
  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
      <button onClick={() => setData([])}>Remove Data</button>
    </>
  );
};

export default UsersList;
