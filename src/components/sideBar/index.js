import React from "react";
import {
  ArrowLeft,
  Essay,
  File,
  UnB,
  Enem,
  Class,
  Video,
  List,
} from "../../svgs/icons";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SideBar() {
  const router = useRouter();

  const essays = router.pathname === "/essays";
  const mocks = router.pathname === "/mocks";
  const unb = router.pathname === "/UnB";
  const questions = router.pathname === "/questions";
  const enem = router.pathname === "/enem";
  const lessons = router.pathname === "/lessons";
  const progress = router.pathname === "/progress";

  return (
    <div className="sideBar sideBar--default">
      <CSSTransition
        classNames="sideBar__item"
        timeout={{ enter: 200, exit: 0 }}
        appear
        in={essays}
      >
        <Link href="/essays">
          <a className="sideBar__item">
            <div className="sideBar__itemIconBox">
              <Essay className="sideBar__itemIcon" />
            </div>
            <p>Corrija sua redação</p>
            <ArrowLeft className="sideBar__itemIndicator" />
          </a>
        </Link>
      </CSSTransition>
      <CSSTransition
        classNames="sideBar__item"
        timeout={{ enter: 200, exit: 0 }}
        appear
        in={mocks}
      >
        <Link href="/mocks">
          <a className="sideBar__item">
            <div className="sideBar__itemIconBox">
              <File className="sideBar__itemIcon" />
            </div>
            <p>Simule uma prova</p>
            <ArrowLeft className="sideBar__itemIndicator" />
          </a>
        </Link>
      </CSSTransition>
      <CSSTransition
        classNames="sideBar__item"
        timeout={{ enter: 200, exit: 0 }}
        appear
        in={unb}
      >
        <Link href="/UnB">
          <a className="sideBar__item">
            <div className="sideBar__itemIconBox">
              <UnB className="sideBar__itemIcon" />
            </div>
            <p>Estude para a UnB</p>
            <ArrowLeft className="sideBar__itemIndicator" />
          </a>
        </Link>
      </CSSTransition>
      <CSSTransition
        classNames="sideBar__item"
        timeout={{ enter: 200, exit: 0 }}
        appear
        in={enem}
      >
        <Link href="/enem">
          <a className="sideBar__item">
            <div className="sideBar__itemIconBox">
              <Enem className="sideBar__itemIcon" />
            </div>
            <p>Estude para o Enem</p>
            <ArrowLeft className="sideBar__itemIndicator" />
          </a>
        </Link>
      </CSSTransition>
      <CSSTransition
        classNames="sideBar__item"
        timeout={{ enter: 200, exit: 0 }}
        appear
        in={questions}
      >
        <Link href="/questions">
          <a className="sideBar__item">
            <div className="sideBar__itemIconBox">
              <Class className="sideBar__itemIcon" />
            </div>
            <p>Tire suas dúvidas</p>
            <ArrowLeft className="sideBar__itemIndicator" />
          </a>
        </Link>
      </CSSTransition>
      <CSSTransition
        classNames="sideBar__item"
        timeout={{ enter: 200, exit: 0 }}
        appear
        in={lessons}
      >
        <Link href="/lessons">
          <a className="sideBar__item">
            <div className="sideBar__itemIconBox">
              <Video className="sideBar__itemIcon" />
            </div>
            <p>Veja videoaulas</p>
            <ArrowLeft className="sideBar__itemIndicator" />
          </a>
        </Link>
      </CSSTransition>
      <CSSTransition
        classNames="sideBar__item"
        timeout={{ enter: 200, exit: 0 }}
        appear
        in={progress}
      >
        <Link href="/progress">
          <a className="sideBar__item">
            <div className="sideBar__itemIconBox">
              <List className="sideBar__itemIcon" />
            </div>
            <p>Corte da lista</p>
            <ArrowLeft className="sideBar__itemIndicator" />
          </a>
        </Link>
      </CSSTransition>
    </div>
  );
}
