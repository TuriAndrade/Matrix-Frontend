import GirlStudyingMobile from "../svgs/background/girlStudyingMobile";
import GirlStudying from "../svgs/background/girlStudying";
import Slides from "../svgs/background/slides";
import GraduatingStudents from "../svgs/background/graduatingStudents";
import ClockCalendar from "../svgs/background/clockCalendar";
import SmallSquares from "../svgs/background/smallSquares";
import GuyPresenting from "../svgs/background/guyPresenting";
import Essay from "../svgs/icons/essay";
import File from "../svgs/icons/file";
import Mail from "../svgs/icons/mail";
import Enem from "../svgs/icons/enem";
import Class from "../svgs/icons/class";
import Video from "../svgs/icons/video";
import List from "../svgs/icons/list";
import Link from "next/link";

export default function Home() {
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
        <SmallSquares className="homePage__benefitsBackgroundSquares" />
        <div className="homePage__benefitsHeading">
          <h1 className="h1 h1--white">Por que procuram o Matrix?</h1>
        </div>
        <div className="homePage__benefitsGrid">
          <div className="benefit">
            <Slides className="benefit__img" />
            <p className="p p--white p--strong benefit__heading">
              Estude do seu jeito
            </p>
            <p className="p p--white benefit__paragraph">
              Escolha entre <span className="uTextStrong">slides</span>,{" "}
              <span className="uTextStrong">videoaulas</span>,{" "}
              <span className="uTextStrong">resumos</span>,{" "}
              <span className="uTextStrong">exercícios</span>,{" "}
              <span className="uTextStrong">correções de redação</span>,{" "}
              <span className="uTextStrong">monitoria</span>, entre outros.
            </p>
          </div>
          <div className="benefit">
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
          <div className="benefit">
            <ClockCalendar className="benefit__img" />
            <p className="p p--white p--strong benefit__heading">
              Para todos os dias e horas
            </p>
            <p className="p p--white benefit__paragraph">
              Estamos sempre a disposição para te orientar em seus estudos e
              tirar eventuais dúvidas!
            </p>
          </div>
        </div>
      </div>
      <div className="homePage__resources">
        <div className="homePage__resourcesGrid homePage__resourcesGrid--desktop">
          <Link href="/essays">
            <a className="resource">
              <Essay className="resource__icon" />
              <p className="resource__heading">
                Corrija sua<br></br>
                <span className="uTextStrong">redação</span>
              </p>
              <p className="resource__text">
                Nos envie sua redação por escrito ou digitada, sem limite de
                envios.
              </p>
            </a>
          </Link>
          <Link href="/mocks">
            <a className="resource">
              <File className="resource__icon" />
              <p className="resource__heading">
                Simule uma<br></br>
                <span className="uTextStrong">prova</span>
              </p>
              <p className="resource__text">
                <span className="uTextStrong">Teste</span> seu conhecimento em
                nossos <span className="uTextStrong">simulados ENEM</span> e{" "}
                <span className="uTextStrong">Pas-UnB</span>.
              </p>
            </a>
          </Link>
          <Link href="/UnB">
            <a className="resource">
              <Mail className="resource__icon" />
              <p className="resource__heading">
                Estude para<br></br>
                <span className="uTextStrong">Pas-UnB</span>
              </p>
              <p className="resource__text">
                Conteúdos <span className="uTextStrong">focados</span> para a{" "}
                <span className="uTextStrong">Universidade de Brasília.</span>
              </p>
            </a>
          </Link>
          <Link href="/enem">
            <a className="resource">
              <Enem className="resource__icon" />
              <p className="resource__heading">
                Estude para<br></br>
                <span className="uTextStrong">Enem</span>
              </p>
              <p className="resource__text">
                Acesse conteúdos <span className="uTextStrong">focados</span>{" "}
                para o{" "}
                <span className="uTextStrong">
                  Exame Nacional do Ensino Médio.
                </span>
              </p>
            </a>
          </Link>
          <Link href="/questions">
            <a className="resource">
              <Class className="resource__icon" />
              <p className="resource__heading">
                Tire suas<br></br>
                <span className="uTextStrong">dúvidas</span>
              </p>
              <p className="resource__text">
                Temos <span className="uTextStrong">monitoria 24h</span>, só
                mandar sua dúvida que{" "}
                <span className="uTextStrong">respondemos.</span>
              </p>
            </a>
          </Link>
          <Link href="/lessons">
            <a className="resource">
              <Video className="resource__icon" />
              <p className="resource__heading">
                Veja<br></br>
                <span className="uTextStrong">videoaulas</span>
              </p>
              <p className="resource__text">
                Acesse nossas videoaulas no{" "}
                <span className="uTextStrong">Youtube.</span>
              </p>
            </a>
          </Link>
          <Link href="/progress">
            <a className="resource">
              <List className="resource__icon" />
              <p className="resource__heading">
                Corte da<br></br>
                <span className="uTextStrong">lista</span>
              </p>
              <p className="resource__text">
                Acompanhe seu <span className="uTextStrong">progresso</span> com
                ajuda da nossa <span className="uTextStrong">checklist.</span>
              </p>
            </a>
          </Link>
          <div className="homePage__resourcesHeading homePage__resourcesHeading--desktop">
            <h1 className="h2 h2--black homePage__resourcesText">
              Tudo que você precisa pra garantir sua{" "}
              <span className="uHighlight uHighlight--primaryLight">vaga</span>
            </h1>
            <Link href="/register">
              <a className="btnPrimary">Começar agora</a>
            </Link>
            <GuyPresenting className="homePage__resourcesImg" />
          </div>
        </div>
        <div className="homePage__resourcesGrid homePage__resourcesGrid--phone">
          <Link href="/essays">
            <a className="resource">
              <Essay className="resource__icon" />
              <p className="resource__heading">
                Corrija sua<br></br>
                <span className="uTextStrong">redação</span>
              </p>
              <p className="resource__text">
                Nos envie sua redação por escrito ou digitada, sem limite de
                envios.
              </p>
            </a>
          </Link>
          <Link href="/mocks">
            <a className="resource">
              <File className="resource__icon" />
              <p className="resource__heading">
                Simule uma<br></br>
                <span className="uTextStrong">prova</span>
              </p>
              <p className="resource__text">
                <span className="uTextStrong">Teste</span> seu conhecimento em
                nossos <span className="uTextStrong">simulados ENEM</span> e{" "}
                <span className="uTextStrong">Pas-UnB</span>.
              </p>
            </a>
          </Link>
          <Link href="/UnB">
            <a className="resource">
              <Mail className="resource__icon" />
              <p className="resource__heading">
                Estude para<br></br>
                <span className="uTextStrong">Pas-UnB</span>
              </p>
              <p className="resource__text">
                Conteúdos <span className="uTextStrong">focados</span> para a{" "}
                <span className="uTextStrong">Universidade de Brasília.</span>
              </p>
            </a>
          </Link>
          <Link href="/enem">
            <a className="resource">
              <Enem className="resource__icon" />
              <p className="resource__heading">
                Estude para<br></br>
                <span className="uTextStrong">Enem</span>
              </p>
              <p className="resource__text">
                Acesse conteúdos <span className="uTextStrong">focados</span>{" "}
                para o{" "}
                <span className="uTextStrong">
                  Exame Nacional do Ensino Médio.
                </span>
              </p>
            </a>
          </Link>
        </div>
        <div className="homePage__resourcesGrid homePage__resourcesGrid--phone">
          <Link href="/questions">
            <a className="resource">
              <Class className="resource__icon" />
              <p className="resource__heading">
                Tire suas<br></br>
                <span className="uTextStrong">dúvidas</span>
              </p>
              <p className="resource__text">
                Temos <span className="uTextStrong">monitoria 24h</span>, só
                mandar sua dúvida que{" "}
                <span className="uTextStrong">respondemos.</span>
              </p>
            </a>
          </Link>
          <Link href="/lessons">
            <a className="resource">
              <Video className="resource__icon" />
              <p className="resource__heading">
                Veja<br></br>
                <span className="uTextStrong">videoaulas</span>
              </p>
              <p className="resource__text">
                Acesse nossas videoaulas no{" "}
                <span className="uTextStrong">Youtube.</span>
              </p>
            </a>
          </Link>
          <Link href="/progress">
            <a className="resource">
              <List className="resource__icon" />
              <p className="resource__heading">
                Corte da<br></br>
                <span className="uTextStrong">lista</span>
              </p>
              <p className="resource__text">
                Acompanhe seu <span className="uTextStrong">progresso</span> com
                ajuda da nossa <span className="uTextStrong">checklist.</span>
              </p>
            </a>
          </Link>
        </div>
        <div className="homePage__resourcesHeading homePage__resourcesHeading--phone">
          <h1 className="h2 h2--black homePage__resourcesText">
            Tudo que você precisa pra garantir sua{" "}
            <span className="uHighlight uHighlight--primaryLight">vaga</span>
          </h1>
          <Link href="/register">
            <a className="btnPrimary">Começar agora</a>
          </Link>
          <GuyPresenting className="homePage__resourcesImg" />
        </div>
      </div>
    </div>
  );
}
