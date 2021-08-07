import Layout from "../components/layout";
// import Navigation from "../components/navigation";
import Header from "../components/Header/header";
import Banner from "../components/banner";
export default function VerticalPage() {
  return (
    <>
      <Header />
      <Banner />
    </>
  );
}

VerticalPage.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
