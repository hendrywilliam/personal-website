import React from "react";

type MainLayoutProps = {
  children: React.ReactElement;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="min-h-screen min-w-screen h-max">{children}</div>;
};
