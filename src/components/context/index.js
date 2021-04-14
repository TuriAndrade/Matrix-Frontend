import React, { useState } from "react";
import { HiddenSideBarContext } from "./hiddenSideBar";

export default function Context(props) {
  const [hiddenSideBarIn, setHiddenSideBarIn] = useState(false);

  return (
    <HiddenSideBarContext.Provider
      value={{ hiddenSideBarIn, setHiddenSideBarIn }}
    >
      {props.children}
    </HiddenSideBarContext.Provider>
  );
}
