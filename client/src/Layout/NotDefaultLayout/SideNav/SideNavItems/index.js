import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNavItems = ({ icon, title, handleClick }) => {
  return (
    <div
      className="py-3 d-flex align-items-center"
      onClick={handleClick}
    >
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        style={{ marginRight: "12px", marginLeft: "10px" }}
        width="30px"
      />
      <div
        style={{ display: "inline-block" }}
      >
        <span style={{ fontWeight: "700" }}>{title}</span>
      </div>
    </div>
  );
};

export default SideNavItems;
