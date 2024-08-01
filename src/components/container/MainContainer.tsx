import React from "react";
type props = {
  children: React.ReactNode;
};
export const MainContainer: React.FC<props> = ({ children }) => {
  return (
    <div>
      <h1>halo</h1>
      {children}
    </div>
  );
};
