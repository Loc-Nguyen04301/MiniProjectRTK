import React from "react";

import SideNav from "./SideNav";

const NotDefaultLayout = ({ children }) => {
  return (
    <>
      <SideNav />
      <main
        style={{
          marginLeft: "200px",
          backgroundColor: "#dee2e6",
          padding: " 0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default NotDefaultLayout;
