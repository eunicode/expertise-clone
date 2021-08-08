import Layout from "../components/layout";
// import Navigation from "../components/navigation";
import Header from "../components/Header/header";
import Banner from "../components/Header/banner";
import TopHalf from "../components/TopHalf/topHalf";
export default function VerticalPage() {
  return (
    <>
      <Header />
      <Banner />
      <TopHalf />
    </>
  );
}

VerticalPage.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
