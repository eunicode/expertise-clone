import Layout from "../components/layout";
import Link from "next/link";

export default function Index() {
  return (
    <section>
      <h2>Index page</h2>
      <Link href="/verticalpage">
        <a>Go back to vertical page</a>
      </Link>
      <style jsx>{`
        a {
          font-size: 3em;
        }
      `}</style>
    </section>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
