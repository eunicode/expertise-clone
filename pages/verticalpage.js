import Layout from "../components/layout";
// import Navigation from "../components/navigation";
import Header from "../components/Header/header";
import Banner from "../components/Header/banner";
import TopHalf from "../components/TopHalf/topHalf";
// import Footer from
// import CardList from "../components/BottomHalf/cardList";
import BottomHalf from "../components/BottomHalf/bottomHalf";

export default function VerticalPage() {
  return (
    <>
      <Header />
      <Banner />
      <TopHalf />
      <BottomHalf />
    </>
  );
}

VerticalPage.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
