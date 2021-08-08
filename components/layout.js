import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Expertise Clone</title>
        <meta name="description" content="Find experts in your area" />
        <meta name="keywords" content="Experts, Law, Business, Home" />
      </Head>
      <main className={styles.main}>{children}</main>
      {/* <main>{children}</main> */}
    </>
  );
}
