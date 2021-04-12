import React, { useState } from "react";
import { HiddenSideBarContext } from "./context";

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
