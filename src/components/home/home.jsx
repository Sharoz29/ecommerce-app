import "./home.css";

import CategoriesBanner from "../categories-banner/categories-banner";
import CategoriesBar from "../categoriesbar/categoriesbar";
import InformationTab from "../information/information";
import Footer from "../footer/footer";
import useFetcher from "../../fetcher";
import { Fragment } from "react";
import { requests } from "../../requests";
import Navbar from "../navbar/navbar";

const Home = () => {
  const [topProducts] = useFetcher(requests.topProducts);
  const [categories] = useFetcher(requests.categories);

  return (
    <Fragment>
      <Navbar />
      <CategoriesBar categories={categories} />
      <CategoriesBanner categories={topProducts} />
      <InformationTab />
      <Footer />
    </Fragment>
  );
};
export default Home;
