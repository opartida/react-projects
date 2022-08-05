import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./components/StarRating";
import Users from "./components/Users";


const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (<Users/>)
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
