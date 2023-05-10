import useFetcher from "../../fetcher";
import { requests } from "../../requests";
import CategoryCard from "../../components/category-card/category-card";
import Navbar from "../../components/navbar/navbar";
import { Fragment } from "react";
import "./electronics.css";

const Electronics = () => {
  const [electronics] = useFetcher(requests.electronics);
  console.log(electronics);

  return (
    <Fragment>
      <Navbar />
      <h1 className="electronics-title">Find Electronic Items</h1>
      <CategoryCard products={electronics} />
    </Fragment>
  );
};
export default Electronics;
