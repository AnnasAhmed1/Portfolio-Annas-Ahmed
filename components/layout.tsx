import React from "react";

const Layout = ({
  children,
  transparent = true,
}: {
  children: any;
  transparent?: any;
}) => {
  return (
    <section
      className={`py-[72px] px-[60px] ${!transparent ? "bg-[#f8f9fa]" : null}`}
    >
      {children}
    </section>
  );
};

export default Layout;
