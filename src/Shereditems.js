import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function SharedItems() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default SharedItems;
