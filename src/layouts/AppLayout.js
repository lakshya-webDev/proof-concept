import React from "react";
const AppLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="app-layout">{children}</div>
    </React.Fragment>
  );
};
export default AppLayout;
