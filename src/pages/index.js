import {
  GirlStudyingMobile,
  GirlStudying,
  Slides,
  GraduatingStudents,
  ClockCalendar,
  SmallSquares,
  GuyPresenting,
  BooksAndPlant,
  GirlAtDesk,
  CurveAndPlant,
  SmallCurve,
} from "../svgs/background";
import {
  Essay,
  File,
  UnB,
  Enem,
  Class,
  Video,
  List,
  Profile,
  Mortarboard,
  Youtube,
  Instagram,
  Whatsapp,
} from "../svgs/icons";
import Link from "next/link";
import MemberCard from "../components/memberCard";
import Question from "../components/question";

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
            <a className="btnPrimary">
              <p className="btnPrimary__text">Comece agora</p>
            </a>
          </Link>
        </div>
      </div>
      <div className="homePage__benefits">
        <img
          src="/bgPattern.webp"
          alt="Background"
          className="backgroundImg"
          loading="lazy"
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
              <UnB className="resource__icon" />
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
              <a className="btnPrimary">
                <p className="btnPrimary__text">Comece agora</p>
              </a>
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
              <UnB className="resource__icon" />
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
            <a className="btnPrimary">
              <p className="btnPrimary__text">Comece agora</p>
            </a>
          </Link>
          <GuyPresenting className="homePage__resourcesImg" />
        </div>
      </div>
      <div className="homePage__stories">
        <img
          src="/bgPattern2.webp"
          alt="Background"
          className="backgroundImg"
          loading="lazy"
        />
        <BooksAndPlant className="homePage__storiesBackgroundBooks" />
        <div className="homePage__storiesGrid">
          <div className="homePage__storiesHeading homePage__storiesHeading--desktop">
            <h1 className="h2 h2--black">O que dizem nossos alunos</h1>
            <p className="p p--black p--medium">
              Veja o que alguns dos nossos mais de 600 alunos estão achando da
              sua experiência no Matrix.
            </p>
          </div>
          <div className="story">
            <Profile className="story__icon" />
            <p className="story__heading">João Pedro do Santos</p>
            <p className="story__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio voluptatibus id quas ex consequuntur, beatae debitis!
              Quis sapiente minima amet, placeat labore quam aut facere? Officia
              corrupti accusamus quam dolor!
            </p>
            <p className="story__footer">
              2º Ano Médio
              <Mortarboard className="story__footer--icon" />
            </p>
          </div>
          <div className="story">
            <Profile className="story__icon" />
            <p className="story__heading">João Pedro do Santos</p>
            <p className="story__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus eveniet eligendi amet sapiente perspiciatis labore
              itaque assumenda aspernatur consequatur et perferendis provident
              architecto veritatis nemo at repellat illum, rem, aut rerum
              doloribus corrupti enim aperiam. Voluptatem praesentium dicta
              possimus labore.
            </p>
            <p className="story__footer">
              2º Ano Médio
              <Mortarboard className="story__footer--icon" />
            </p>
          </div>
          <div className="story">
            <Profile className="story__icon" />
            <p className="story__heading">João Pedro do Santos</p>
            <p className="story__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, rem adipisci expedita eveniet dolorem magnam
              voluptates, ut dicta illo perspiciatis laboriosam, nulla commodi
              quisquam? Adipisci eligendi rerum dignissimos? Repudiandae,
              exercitationem.
            </p>
            <p className="story__footer">
              2º Ano Médio
              <Mortarboard className="story__footer--icon" />
            </p>
          </div>
          <div className="story">
            <Profile className="story__icon" />
            <p className="story__heading">João Pedro do Santos</p>
            <p className="story__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              alias in doloremque esse sequi nihil est, aspernatur neque aliquid
              placeat mollitia laudantium illo tenetur tempore possimus odit?
              Illo, enim quis! Delectus quidem rerum ea aliquam accusantium
              culpa dolorem non laudantium amet. Sint nam dolores doloremque!
            </p>
            <p className="story__footer">
              2º Ano Médio
              <Mortarboard className="story__footer--icon" />
            </p>
          </div>
          <div className="story">
            <Profile className="story__icon" />
            <p className="story__heading">João Pedro do Santos</p>
            <p className="story__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              eligendi recusandae nam repellendus dolorum asperiores delectus
              sit aut, alias, ullam ut ipsam totam minima reprehenderit quo
              cumque laborum officiis ab.
            </p>
            <p className="story__footer">
              2º Ano Médio
              <Mortarboard className="story__footer--icon" />
            </p>
          </div>
          <div className="story">
            <Profile className="story__icon" />
            <p className="story__heading">João Pedro do Santos</p>
            <p className="story__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              quod doloribus vel minima, dignissimos sunt architecto
              consectetur, fugiat sed illo ullam pariatur dolore error ad.
            </p>
            <p className="story__footer">
              2º Ano Médio
              <Mortarboard className="story__footer--icon" />
            </p>
          </div>
          <div className="story">
            <Profile className="story__icon" />
            <p className="story__heading">João Pedro do Santos</p>
            <p className="story__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              itaque molestias laboriosam amet laborum commodi sunt in
              consequuntur porro aperiam repudiandae iste veritatis, accusamus
              odit eligendi exercitationem velit.
            </p>
            <p className="story__footer">
              2º Ano Médio
              <Mortarboard className="story__footer--icon" />
            </p>
          </div>
        </div>
        <div className="homePage__storiesHeading homePage__storiesHeading--phone">
          <h1 className="h2 h2--black">O que dizem nossos alunos</h1>
          <p className="p p--black p--medium">
            Veja o que alguns dos nossos mais de 600 alunos estão achando da sua
            experiência no Matrix.
          </p>
        </div>
      </div>
      <div className="homePage__socialMedia">
        <img
          src="/bgPattern.webp"
          alt="Background"
          className="backgroundImg homePage__socialMediaBackgroundImg"
          loading="lazy"
        />
        <div className="homePage__socialMediaGrid">
          <div className="homePage__socialMediaHeading homePage__socialMediaHeading--desktop">
            <h1 className="h1 h1--white">
              Fica ligado<br></br>nas nossas redes
            </h1>
          </div>
          <div className="homePage__socialMediaHeading homePage__socialMediaHeading--tabLand">
            <h1 className="h1 h1--white">Fica ligado nas nossas redes</h1>
          </div>
          <div className="homePage__socialMediaHeading homePage__socialMediaHeading--smallPhone">
            <h1 className="h1 h1--white">
              Fica ligado<br></br>nos nossos
            </h1>
          </div>
          <div className="homePage__socialMediaIconsBox">
            <a
              href="https://www.youtube.com/"
              className="socialMediaIcon socialMediaIcon--big socialMediaIcon--white"
            >
              <Youtube />
            </a>
            <a
              href="https://www.instagram.com/"
              className="socialMediaIcon socialMediaIcon--big socialMediaIcon--white"
            >
              <Instagram />
            </a>
            <a
              href="https://www.whatsapp.com/"
              className="socialMediaIcon socialMediaIcon--big socialMediaIcon--white"
            >
              <Whatsapp />
            </a>
          </div>
          <GirlAtDesk className="homePage__socialMediaGirl" />
          <img
            src="/smartphones.webp"
            alt="smartphones"
            className="homePage__socialMediaSmartphones"
          />
        </div>
      </div>
      <div className="homePage__members">
        <CurveAndPlant className="homePage__membersBackground" />
        <h1 className="h1 h1--black homePage__membersHeading homePage__membersHeading--desktop">
          Quem torna isso possível
        </h1>
        <h1 className="h1 h1--black homePage__membersHeading homePage__membersHeading--smallPhone">
          Quem torna<br></br>isso possível
        </h1>
        <div className="homePage__membersGrid">
          <MemberCard
            picture="/defaultProfilePicture.webp"
            alt="defaultProfilePicture"
            name="Clara Bastos"
            title="Diretora Executiva"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            doloremque nisi dignissimos expedita perferendis tempora officiis
            dolore! Sed repellat harum, tenetur a odit autem praesentium, vero
            nesciunt dignissimos ipsa impedit quam placeat perspiciatis dolorum non
            quasi natus debitis, est assumenda necessitatibus cum! Eaque et corporis
            nisi similique rerum odit iusto!"
            youtube="https://youtube.com"
            instagram="https://instagram.com"
            whatsapp="https://whatsapp.com"
          />
          <MemberCard
            picture="/defaultProfilePicture.webp"
            alt="defaultProfilePicture"
            name="Clara Bastos"
            title="Diretora Executiva"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            doloremque nisi dignissimos expedita perferendis tempora officiis
            dolore! Sed repellat harum, tenetur a odit autem praesentium, vero
            nesciunt dignissimos ipsa impedit quam placeat perspiciatis dolorum non
            quasi natus debitis, est assumenda necessitatibus cum! Eaque et corporis
            nisi similique rerum odit iusto!"
            youtube="https://youtube.com"
            instagram="https://instagram.com"
            whatsapp="https://whatsapp.com"
          />
          <MemberCard
            picture="/defaultProfilePicture.webp"
            alt="defaultProfilePicture"
            name="Clara Bastos"
            title="Diretora Executiva"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            doloremque nisi dignissimos expedita perferendis tempora officiis
            dolore! Sed repellat harum, tenetur a odit autem praesentium, vero
            nesciunt dignissimos ipsa impedit quam placeat perspiciatis dolorum non
            quasi natus debitis, est assumenda necessitatibus cum! Eaque et corporis
            nisi similique rerum odit iusto!"
            youtube="https://youtube.com"
            instagram="https://instagram.com"
            whatsapp="https://whatsapp.com"
          />
          <MemberCard
            picture="/defaultProfilePicture.webp"
            alt="defaultProfilePicture"
            name="Clara Bastos"
            title="Diretora Executiva"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            doloremque nisi dignissimos expedita perferendis tempora officiis
            dolore! Sed repellat harum, tenetur a odit autem praesentium, vero
            nesciunt dignissimos ipsa impedit quam placeat perspiciatis dolorum non
            quasi natus debitis, est assumenda necessitatibus cum! Eaque et corporis
            nisi similique rerum odit iusto!"
            youtube="https://youtube.com"
            instagram="https://instagram.com"
            whatsapp="https://whatsapp.com"
          />
          <MemberCard
            picture="/defaultProfilePicture.webp"
            alt="defaultProfilePicture"
            name="Clara Bastos"
            title="Diretora Executiva"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            doloremque nisi dignissimos expedita perferendis tempora officiis
            dolore! Sed repellat harum, tenetur a odit autem praesentium, vero
            nesciunt dignissimos ipsa impedit quam placeat perspiciatis dolorum non
            quasi natus debitis, est assumenda necessitatibus cum! Eaque et corporis
            nisi similique rerum odit iusto!"
            youtube="https://youtube.com"
            instagram="https://instagram.com"
            whatsapp="https://whatsapp.com"
          />
        </div>
      </div>
      <div className="homePage__questions">
        <div className="homePage__questionsHeading">
          <h1 className="h1 h1--black">Perguntas Frequentes</h1>
          <p className="p p--black p--medium">
            Aqui você acha a resposta para a maioria das perguntas. Qualquer
            coisa entra em contato com a gente pelo Instagram ou Whatsapp.
          </p>
        </div>
        <div className="homePage__questionsContent">
          <Question
            heading="Tem que pagar?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              explicabo ipsum nostrum optio est maiores ullam, sit pariatur
              consequatur, ducimus excepturi at tenetur aliquid corrupti maxime
              iusto inventore accusamus autem."
          />
          <Question
            heading="É obrigatório entrar nas salas?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              explicabo ipsum nostrum optio est maiores ullam, sit pariatur
              consequatur, ducimus excepturi at tenetur aliquid corrupti maxime
              iusto inventore accusamus autem."
          />
          <Question
            heading="Onde posso tirar as dúvidas?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              explicabo ipsum nostrum optio est maiores ullam, sit pariatur
              consequatur, ducimus excepturi at tenetur aliquid corrupti maxime
              iusto inventore accusamus autem."
          />
          <Question
            heading="Não consigo entrar nas salas!"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              explicabo ipsum nostrum optio est maiores ullam, sit pariatur
              consequatur, ducimus excepturi at tenetur aliquid corrupti maxime
              iusto inventore accusamus autem."
          />
          <Question
            heading="Quantas redações posso mandar?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              explicabo ipsum nostrum optio est maiores ullam, sit pariatur
              consequatur, ducimus excepturi at tenetur aliquid corrupti maxime
              iusto inventore accusamus autem."
          />
        </div>
      </div>
      <div className="homePage__footer footer">
        <img
          src="/bgPattern.webp"
          alt="Background"
          className="backgroundImg"
          loading="lazy"
        />
        <SmallCurve className="footer__backgroundDetail" />
        <p className="p--white p--medium">
          Copyright &copy; 2021 Projeto Matrix
        </p>
        <div className="footer__linkBox">
          <a
            href="https://www.youtube.com/"
            className="socialMediaIcon socialMediaIcon--medium socialMediaIcon--white"
          >
            <Youtube />
          </a>
          <a
            href="https://www.instagram.com/"
            className="socialMediaIcon socialMediaIcon--medium socialMediaIcon--white"
          >
            <Instagram />
          </a>
          <a
            href="https://www.whatsapp.com/"
            className="socialMediaIcon socialMediaIcon--medium socialMediaIcon--white"
          >
            <Whatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
