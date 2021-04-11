import React from "react";
import NavBar from "../navBar";
import SideBar from "../sideBar";
import SimpleSideBar from "../simpleSideBar";
import { useRouter } from "next/router";

export default function Container(props) {
  const router = useRouter();

  const home = router.pathname === "/";
  const help = router.pathname === "/help";
  const login = router.pathname === "/login";
  const register = router.pathname === "/register";

  return (
    <div className="container">
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
