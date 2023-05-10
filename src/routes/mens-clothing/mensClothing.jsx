import "./mensClothing.css";
import useFetcher from "../../fetcher";
import { requests } from "../../requests";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import CategoryCard from "../../components/category-card/category-card";

const MensClothing = () => {
  const [mensClothing] = useFetcher(requests.menclothing);
  console.log(mensClothing);
  return (
    <Fragment>
      <Navbar />
      <h1 className="mens-title">Find Amazing Products For Men</h1>
      <CategoryCard products={mensClothing} />
    </Fragment>
  );
};
export default MensClothing;
