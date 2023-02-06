import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="text-white flex flex-col text-center pt-8 border-t-2">
      <h2 className="pb-8 text-lg font-semibold">Navigation</h2>
      <ul>
        <li>
          <Link to="/hosts">Hosts</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
      </ul>
    </div>
  );
};
