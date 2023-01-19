import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen min-w-screen h-max bg-black">{children}</div>
  );
};
