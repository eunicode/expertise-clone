import Head from "next/head";
import styles from "./layout.module.css";
import Header from "../components/Header/header";
import Banner from "../components/Header/banner";
import Footer from "../components/Footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Expertise Clone</title>
        <meta name="description" content="Find experts in your area" />
        <meta name="keywords" content="Experts, Law, Business, Home" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <Header />
      <Banner />

      <main>{children}</main>

      <Footer />
    </>
  );
}
