import useFetcher from "../../fetcher";
import { requests } from "../../requests";
import CategoryCard from "../../components/category-card/category-card";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";

const Jewelery = () => {
  const [jewelery] = useFetcher(requests.jewelery);
  return (
    <Fragment>
      <Navbar />
      <h1 className="jewelery-title">Find Beautiful Jewelery Items</h1>
      <CategoryCard products={jewelery} />
    </Fragment>
  );
};
export default Jewelery;
