import React, { useState } from "react";

function Questions({ question }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <p>{question.title}</p>
      <div className={open ? "open" : "closed"}>
        <button
          onClick={() => setOpen(!open)}
        >
          {open ? "-" : "+"}
        </button>
      </div>
      {open && <p>{question.info}</p>}
    </div>
  );
}

export default Questions;
