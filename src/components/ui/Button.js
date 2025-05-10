import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
