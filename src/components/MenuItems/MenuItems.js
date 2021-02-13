import { useState } from "react";
import "./MenuItems.css";

const MenuItems = ({ name, count, sub, text }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-items">
      <div onClick={() => setOpen(!open)}>
        <div className="menu-items-header">
          <h2>{name}</h2>
          <h3>{count}</h3>
        </div>
        <div className="menu-items-content">
          <p>{text}</p>
        </div>
      </div>
      {open && <div>{sub}</div>}
    </div>
  );
};

export default MenuItems;
