import Layout from "../components/layout";
// import Navigation from "../components/navigation";
import Header from "../components/Header/header";
import Banner from "../components/Header/banner";
import TopHalf from "../components/TopHalf/topHalf";
import BottomHalf from "../components/BottomHalf/bottomHalf";
import Footer from "../components/Footer/footer";
// import CardList from "../components/BottomHalf/cardList";

export default function VerticalPage() {
  return (
    <>
      <Header />
      <Banner />
      <TopHalf />
      <BottomHalf />
      <Footer />
    </>
  );
}

VerticalPage.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
