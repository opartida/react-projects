import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./components/StarRating";
// import Users from "./components/Users";
import { useReducer } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );
  const initialState = {
    message: "hi",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "yell":
        return {
          message: `HEY I JUST SAID ${state.message}`,
        };
      case "whisper":
        return {
          message: `Excuse me, I just said ${state.message}`,
        };
        default:
          return {message: "Unkwown"}
    }
  }
  const [checked, toggle] = useReducer((checked) => !checked, false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1 onClick={() => setNumber(1)}>{number}</h1>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
      <p>Message: {state.message}</p>
      <button onClick={()=>dispatch({type: "yell"})}>YELL</button>
      <button onClick={()=>dispatch({type: "whisper"})}>WHISPER</button>
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
