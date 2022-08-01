import React from "react";

const Status = ({ done, undone }) => {
  return (
    <div>
      Done: {done} | Undone: {undone}
    </div>
  );
};

export default Status;
