import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api.github.com/users`);
      const data = await result.json();
      setData(data);
    };
    fetchData();
  }, []);
  console.log('entro', data.length)
  return data.length
    ? data && <UsersList data={data} setData={setData} />
    : null;
};

export default Users;
