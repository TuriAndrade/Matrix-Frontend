import GirlStudyingMobile from "../svgs/background/girlStudyingMobile";
import GirlStudying from "../svgs/background/girlStudying";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="homePage__main">
        <GirlStudying className="homePage__mainBackground homePage__mainBackground--default" />
        <GirlStudyingMobile className="homePage__mainBackground homePage__mainBackground--tabPort" />
        <div className="homePage__mainHeading">
          <h1 className="h1 h1--black">Estudo ao seu alcance</h1>
          <p className="p p--black">
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
      </div>
    </>
  );
}
