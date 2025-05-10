import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      {children}
    </div>
  );
}
