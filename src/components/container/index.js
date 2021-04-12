import React, { useContext } from "react";
import NavBar from "../navBar";
import SideBar from "../sideBar";
import SimpleSideBar from "../simpleSideBar";
import HiddenSideBar from "../hiddenSideBar";
import { useRouter } from "next/router";
import { HiddenSideBarContext } from "../context/context";
import { CSSTransition } from "react-transition-group";

export default function Container(props) {
  const { hiddenSideBarIn } = useContext(HiddenSideBarContext);

  const router = useRouter();

  const home = router.pathname === "/";
  const help = router.pathname === "/help";
  const login = router.pathname === "/login";
  const register = router.pathname === "/register";

  return (
    <div className="container">
      <CSSTransition
        in={hiddenSideBarIn}
        classNames="container__hiddenSideBar"
        timeout={400}
        unmountOnExit
      >
        <div className="container__hiddenSideBar">
          <HiddenSideBar />
        </div>
      </CSSTransition>
      <div className="container__navBar">
        <NavBar />
      </div>
      {home ? null : (
        <div className="container__sideBar">
          {login || register || help ? <SimpleSideBar /> : <SideBar />}
        </div>
      )}
      <div className="container__main">{props.children}</div>
    </div>
  );
}
