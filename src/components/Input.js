import React from "react";

export default function Input({ value, onChange, onKeyDown }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Search for a GitHub user..."
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
