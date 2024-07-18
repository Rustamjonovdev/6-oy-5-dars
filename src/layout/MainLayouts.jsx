import { Outlet } from "react-router-dom";

import React from "react";

function MainLayouts() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayouts;
