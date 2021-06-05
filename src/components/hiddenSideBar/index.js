import React, { useContext } from "react";
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
import Link from "next/link";
import { useRouter } from "next/router";
import { HiddenSideBarContext } from "../context/hiddenSideBar";
import { CSSTransition } from "react-transition-group";

export default function HiddenSideBar() {
  const { hiddenSideBarIn, setHiddenSideBarIn } =
    useContext(HiddenSideBarContext);

  const router = useRouter();

  const essays = router.pathname === "/essays";
  const mocks = router.pathname === "/mocks";
  const unb = router.pathname === "/UnB";
  const questions = router.pathname === "/questions";
  const enem = router.pathname === "/enem";
  const lessons = router.pathname === "/lessons";
  const progress = router.pathname === "/progress";

  return (
    <div className="hiddenSideBar">
      <div
        onClick={() => setHiddenSideBarIn(false)}
        className="hiddenSideBar__closeArea"
      ></div>
      <CSSTransition
        in={hiddenSideBarIn}
        classNames="hiddenSideBar__content"
        timeout={{ enter: 600, exit: 300 }}
        appear
        unmountOnExit
      >
        <div className="hiddenSideBar__content">
          <div className="hiddenSideBar__nbSection">
            <Link href="/help">
              <a
                onClick={() => setHiddenSideBarIn(false)}
                className="hiddenSideBar__link"
              >
                <p>Como funciona</p>
              </a>
            </Link>
            <Link href="/help">
              <a
                onClick={() => setHiddenSideBarIn(false)}
                className="hiddenSideBar__link"
              >
                <p>Entrar</p>
              </a>
            </Link>
            <Link href="/help">
              <a
                onClick={() => setHiddenSideBarIn(false)}
                className="hiddenSideBar__link"
              >
                <p>Cadastrar-se</p>
              </a>
            </Link>
          </div>
          <div className="hiddenSideBar__sbSection">
            <CSSTransition
              classNames="hiddenSideBar__item"
              timeout={{ enter: 200, exit: 0 }}
              appear
              in={essays}
            >
              <Link href="/essays">
                <a
                  onClick={() => setHiddenSideBarIn(false)}
                  className="hiddenSideBar__item"
                >
                  <div className="hiddenSideBar__itemIconBox">
                    <Essay className="hiddenSideBar__itemIcon" />
                  </div>
                  <p>Corrija sua redação</p>
                  <ArrowLeft className="hiddenSideBar__itemIndicator" />
                </a>
              </Link>
            </CSSTransition>
            <CSSTransition
              classNames="hiddenSideBar__item"
              timeout={{ enter: 200, exit: 0 }}
              appear
              in={mocks}
            >
              <Link href="/mocks">
                <a
                  onClick={() => setHiddenSideBarIn(false)}
                  className="hiddenSideBar__item"
                >
                  <div className="hiddenSideBar__itemIconBox">
                    <File className="hiddenSideBar__itemIcon" />
                  </div>
                  <p>Simule uma prova</p>
                  <ArrowLeft className="hiddenSideBar__itemIndicator" />
                </a>
              </Link>
            </CSSTransition>
            <CSSTransition
              classNames="hiddenSideBar__item"
              timeout={{ enter: 200, exit: 0 }}
              appear
              in={unb}
            >
              <Link href="/UnB">
                <a
                  onClick={() => setHiddenSideBarIn(false)}
                  className="hiddenSideBar__item"
                >
                  <div className="hiddenSideBar__itemIconBox">
                    <UnB className="hiddenSideBar__itemIcon" />
                  </div>
                  <p>Estude para a UnB</p>
                  <ArrowLeft className="hiddenSideBar__itemIndicator" />
                </a>
              </Link>
            </CSSTransition>
            <CSSTransition
              classNames="hiddenSideBar__item"
              timeout={{ enter: 200, exit: 0 }}
              appear
              in={enem}
            >
              <Link href="/enem">
                <a
                  onClick={() => setHiddenSideBarIn(false)}
                  className="hiddenSideBar__item"
                >
                  <div className="hiddenSideBar__itemIconBox">
                    <Enem className="hiddenSideBar__itemIcon" />
                  </div>
                  <p>Estude para o Enem</p>
                  <ArrowLeft className="hiddenSideBar__itemIndicator" />
                </a>
              </Link>
            </CSSTransition>
            <CSSTransition
              classNames="hiddenSideBar__item"
              timeout={{ enter: 200, exit: 0 }}
              appear
              in={questions}
            >
              <Link href="/questions">
                <a
                  onClick={() => setHiddenSideBarIn(false)}
                  className="hiddenSideBar__item"
                >
                  <div className="hiddenSideBar__itemIconBox">
                    <Class className="hiddenSideBar__itemIcon" />
                  </div>
                  <p>Tire suas dúvidas</p>
                  <ArrowLeft className="hiddenSideBar__itemIndicator" />
                </a>
              </Link>
            </CSSTransition>
            <CSSTransition
              classNames="hiddenSideBar__item"
              timeout={{ enter: 200, exit: 0 }}
              appear
              in={lessons}
            >
              <Link href="/lessons">
                <a
                  onClick={() => setHiddenSideBarIn(false)}
                  className="hiddenSideBar__item"
                >
                  <div className="hiddenSideBar__itemIconBox">
                    <Video className="hiddenSideBar__itemIcon" />
                  </div>
                  <p>Veja videoaulas</p>
                  <ArrowLeft className="hiddenSideBar__itemIndicator" />
                </a>
              </Link>
            </CSSTransition>
            <CSSTransition
              classNames="hiddenSideBar__item"
              timeout={{ enter: 200, exit: 0 }}
              appear
              in={progress}
            >
              <Link href="/progress">
                <a
                  onClick={() => setHiddenSideBarIn(false)}
                  className="hiddenSideBar__item"
                >
                  <div className="hiddenSideBar__itemIconBox">
                    <List className="hiddenSideBar__itemIcon" />
                  </div>
                  <p>Corte da lista</p>
                  <ArrowLeft className="hiddenSideBar__itemIndicator" />
                </a>
              </Link>
            </CSSTransition>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
