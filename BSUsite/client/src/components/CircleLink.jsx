import React from "react";

function CircleLink({ label, to, color }) {
  return (
    <a href={to} className={`circle ${color}`}>
      {label}
    </a>
  );
}

export default CircleLink;