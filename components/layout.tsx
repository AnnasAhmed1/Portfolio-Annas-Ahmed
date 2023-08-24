import React from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <section className="py-[72px] px-[60px] bg-[#f8f9fa]">{children}</section>
  );
};

export default Layout;
