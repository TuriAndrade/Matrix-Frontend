import { useState } from "react";
import GirlStudyingMobile from "../svgs/background/girlStudyingMobile";
import GirlStudying from "../svgs/background/girlStudying";
import Slides from "../svgs/background/slides";
import GraduatingStudents from "../svgs/background/graduatingStudents";
import ClockCalendar from "../svgs/background/clockCalendar";
import CircleArrowRight from "../svgs/icons/circleArrowRight";
import CircleArrowLeft from "../svgs/icons/circleArrowLeft";
import Link from "next/link";

export default function Home() {
  const [benefitsSection, setBenefitsSection] = useState(1);

  return (
    <div className="homePage">
      <div className="homePage__main">
        <GirlStudying className="homePage__mainBackground homePage__mainBackground--default" />
        <GirlStudyingMobile className="homePage__mainBackground homePage__mainBackground--tabPort" />
        <div className="homePage__mainHeading">
          <h1 className="h1 h1--black">Estudo ao seu alcance</h1>
          <p className="p p--black p--medium">
            O projeto Matrix é uma organização sem fins lucrativos que visa
            oferecer material didático de forma gratuita e acessível a todos.
          </p>
          <Link href="/register">
            <a className="btnPrimary">Comece agora</a>
          </Link>
        </div>
      </div>
      <div className="homePage__benefits">
        <img
          src="/bgPattern.webp"
          alt="Background"
          className="homePage__benefitsBackground"
        />
        <button
          onClick={() =>
            benefitsSection > 1 &&
            setBenefitsSection((prevstate) => prevstate - 1)
          }
          className={`homePage__benefitsArrowBtn homePage__benefitsArrowBtn--left ${
            benefitsSection === 1 && "uDisabledBtn"
          }`}
        >
          <CircleArrowLeft />
        </button>
        <button
          onClick={() =>
            benefitsSection < 3 &&
            setBenefitsSection((prevstate) => prevstate + 1)
          }
          className={`homePage__benefitsArrowBtn homePage__benefitsArrowBtn--right ${
            benefitsSection === 3 && "uDisabledBtn"
          }`}
        >
          <CircleArrowRight />
        </button>
        <div className="homePage__benefitsHeading">
          <h1 className="h1 h1--white">Por que procuram o Matrix?</h1>
        </div>
        <div
          className={`benefit homePage__benefitsItem homePage__benefitsItem--1 homePage__benefitsItem--transform${benefitsSection}`}
        >
          <Slides className="benefit__img" />
          <p className="p p--white p--strong benefit__heading">
            Estude do seu jeito
          </p>
          <p className="p p--white benefit__paragraph">
            Escolhe entre <span className="uTextStrong">slides</span>,{" "}
            <span className="uTextStrong">videoaulas</span>,{" "}
            <span className="uTextStrong">resumos</span>,{" "}
            <span className="uTextStrong">exercícios</span>,{" "}
            <span className="uTextStrong">correções de redação</span>,{" "}
            <span className="uTextStrong">monitoria</span>, entre outros.
          </p>
        </div>
        <div
          className={`benefit homePage__benefitsItem homePage__benefitsItem--2 homePage__benefitsItem--transform${benefitsSection}`}
        >
          <GraduatingStudents className="benefit__img" />
          <p className="p p--white p--strong benefit__heading">
            De alunos para alunos
          </p>
          <p className="p p--white benefit__paragraph">
            Contamos com mais de 20 tutores das diferentes áreas do
            conhecimento, que são estudantes assim como você e conhecem bem as
            dificuldades dessa fase.
          </p>
        </div>
        <div
          className={`benefit homePage__benefitsItem homePage__benefitsItem--3 homePage__benefitsItem--transform${benefitsSection}`}
        >
          <ClockCalendar className="benefit__img" />
          <p className="p p--white p--strong benefit__heading">
            Para todos os dias e horas
          </p>
          <p className="p p--white benefit__paragraph">
            Estamos sempre a disposição para te orientar em seus estudos e tirar
            eventuais dúvidas!
          </p>
        </div>
      </div>
    </div>
  );
}
