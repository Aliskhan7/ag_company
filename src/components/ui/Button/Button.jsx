import React from "react";

function Button({ name, bg, p, classStyle }) {
  return (
    <button
      className={`${bg} ${p} ${classStyle} border border-blue-200 rounded-full text-white`}
    >
      {name}
    </button>
  );
}

export default Button;
