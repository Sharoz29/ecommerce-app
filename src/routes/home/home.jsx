import "./home.css";

import CategoriesBanner from "../../components/categories-banner/categories-banner";
import InformationTab from "../../components/information/information";
import Footer from "../../components/footer/footer";
import useFetcher from "../../fetcher";
import { Fragment } from "react";
import { requests } from "../../requests";
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  const [topProducts] = useFetcher(requests.topProducts);

  return (
    <Fragment>
      <Navbar />
      <CategoriesBanner categories={topProducts} />
      <InformationTab />
      <Footer />
    </Fragment>
  );
};
export default Home;
