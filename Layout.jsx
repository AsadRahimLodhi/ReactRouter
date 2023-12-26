import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./src/Components/Header/Header";
import Footer from "./src/Components/Footer/Footer";

function Layout() {
  return <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>;
}

export default Layout;
