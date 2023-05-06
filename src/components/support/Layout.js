import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  if (router.pathname.startsWith(`/quote`)) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
