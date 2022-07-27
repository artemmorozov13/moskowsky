import Head from "next/head";

import Carusel from "Components/Carusel/Carusel";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Collectives from "Components/Collectives/Collectives";
import Container from "UI/Container/Container";
import Affiche from "Components/Affiche/Affiche";
import News from "Components/News/News";
import Contacts from "Components/Contacts/Contacts";
import { IndexData } from "shared/constants/pages/IndexData";

import s from "../styles/pages/Home.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";

export default function HomePage() {
  const {
    head: { title },
    carusel,
    collectives,
    affiche,
    news,
    contacts,
  } = IndexData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Carusel data={carusel} />
        <Collectives data={collectives} />
        <Affiche data={affiche} />
        <News data={news} />
        <Wrapper space borderBottom />
        <Contacts data={contacts} />
      </main>

      <Footer />
    </>
  );
}
