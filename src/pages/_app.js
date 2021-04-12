import "../styles/main.scss";
import Head from "next/head";
import Context from "../components/context";
import Container from "../components/container";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.webp" />
        <title>Matrix | Estudo ao seu alcance</title>
      </Head>
      <Context>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Context>
    </>
  );
}

export default MyApp;
