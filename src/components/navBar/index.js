import React, { useState, useContext } from "react";
import {
  ArrowDown,
  Essay,
  File,
  UnB,
  Enem,
  Class,
  Video,
  List,
} from "../../svgs/icons";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import { HiddenSideBarContext } from "../context/hiddenSideBar";

export default function NavBar() {
  const [dropdownIn, setDropdownIn] = useState(false);

  const { hiddenSideBarIn, setHiddenSideBarIn } =
    useContext(HiddenSideBarContext);

  return (
    <div className="navBar">
      <CSSTransition
        in={hiddenSideBarIn}
        classNames="navBar__menuBtn"
        timeout={300}
      >
        <button
          onClick={() => setHiddenSideBarIn((prevstate) => !prevstate)}
          className="navBar__menuBtn"
        ></button>
      </CSSTransition>
      <Link href="/">
        <a onClick={() => setHiddenSideBarIn(false)} className="navBar__logo">
          <img src="/logo.webp" alt="Logo" />
          <p>Projeto Matrix</p>
        </a>
      </Link>
      <div className="navBar__gap"></div>
      <div
        onClick={() => setDropdownIn((prevstate) => !prevstate)}
        className="navBar__item"
      >
        <div className="btnText btnText--black">
          <p>Cursos e Recursos</p>
          <ArrowDown className="btnText--icon" />
          <CSSTransition
            in={dropdownIn}
            classNames="dropdown"
            timeout={300}
            unmountOnExit
          >
            <div className="navBar__dropdown dropdown">
              <Link href="/essays">
                <a className="dropdown__item">
                  <Essay className="dropdown__item--icon" />
                  <p>Corrija sua redação</p>
                </a>
              </Link>
              <Link href="/mocks">
                <a className="dropdown__item">
                  <File className="dropdown__item--icon" />
                  <p>Simule uma prova</p>
                </a>
              </Link>
              <Link href="/UnB">
                <a className="dropdown__item">
                  <UnB className="dropdown__item--icon" />
                  <p>Estude para a UnB</p>
                </a>
              </Link>
              <Link href="/enem">
                <a className="dropdown__item">
                  <Enem className="dropdown__item--icon" />
                  <p>Estude para o Enem</p>
                </a>
              </Link>
              <Link href="/questions">
                <a className="dropdown__item">
                  <Class className="dropdown__item--icon" />
                  <p>Tire suas dúvidas</p>
                </a>
              </Link>
              <Link href="/lessons">
                <a className="dropdown__item">
                  <Video className="dropdown__item--icon" />
                  <p>Veja videoaulas</p>
                </a>
              </Link>
              <Link href="/progress">
                <a className="dropdown__item">
                  <List className="dropdown__item--icon" />
                  <p>Corte da lista</p>
                </a>
              </Link>
            </div>
          </CSSTransition>
        </div>
      </div>
      <div className="navBar__item">
        <Link href="/help">
          <a className="btnText btnText--black">
            <p>Como Funciona</p>
          </a>
        </Link>
      </div>
      <div className="navBar__item">
        <Link href="/login">
          <a className="btnText btnText--black">
            <p>Entrar</p>
          </a>
        </Link>
      </div>
      <div className="navBar__item">
        <Link href="/register">
          <a className="btnPrimary">
            <p className="btnPrimary__text">Cadastrar-se</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
