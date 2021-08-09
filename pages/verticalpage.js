import Layout from "../components/layout";
import TopHalf from "../components/TopHalf/topHalf";
import BottomHalf from "../components/BottomHalf/bottomHalf";

export default function VerticalPage() {
  return (
    <>
      <TopHalf />
      <BottomHalf />
    </>
  );
}

VerticalPage.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};
