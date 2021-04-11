import "../styles/main.scss";
import Head from "next/head";
import Container from "../components/container";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.webp" />
        <title>Matrix | Estudo ao seu alcance</title>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
