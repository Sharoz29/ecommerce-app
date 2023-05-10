import "./womensClothing.css";
import useFetcher from "../../fetcher";
import { requests } from "../../requests";
import CategoryCard from "../../components/category-card/category-card";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";

const WomensClothing = () => {
  const [womenclothing] = useFetcher(requests.womenclothing);

  return (
    <Fragment>
      <Navbar />
      <h1 className="womens-title">Find Amazing Items for Her</h1>
      <CategoryCard products={womenclothing} />
    </Fragment>
  );
};
export default WomensClothing;
