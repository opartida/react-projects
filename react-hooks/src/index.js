import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./components/StarRating";
// import Users from "./components/Users";
// import Message from "./components/Message";
import { useInput } from "./UseInput";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("");

  const submit = (e) => {
    e.preventDefault();

    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form>
      <input type="text" placeholder="Sound..." {...titleProps} />

      <input type="color" {...colorProps} />

      <button onClick={submit}>Add</button>
    </form>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
