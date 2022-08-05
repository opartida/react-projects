import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./components/StarRating";
import React, { useState, useEffect } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api.github.com/users`);
      const data = await result.json();
      setData(data);
    };
    fetchData();
  },[]);

  return data.length
    ? data && (
        <>
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.login}</li>
            ))}
          </ul>
          <button onClick={()=> setData([])}>Remove Data</button>
        </>
      )
    : null;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
