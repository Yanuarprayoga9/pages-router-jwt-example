import React from "react";
type props = {
  children: React.ReactNode;
};
 const layout: React.FC<props> = ({ children }) => {

  return (
    <div className="bg-red-600">
      <h1>halo</h1>
      {children}
    </div>
  );
};
export default layout