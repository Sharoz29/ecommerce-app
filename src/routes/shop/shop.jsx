import useFetcher from "../../fetcher";
import "./shop.css";
import { requests } from "../../requests";
import CartButton from "../../components/cartbutton/cartbutton";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import CategoryCard from "../../components/category-card/category-card";

const Shop = () => {
  const [allProductsProducts] = useFetcher(requests.allProducts);

  const allProducts = allProductsProducts.map((product) => {
    return { ...product, quantity: 1 };
  });

  return (
    <Fragment>
      <Navbar />
      <div className="all-container">
        <h1 className="shop-title">Find something you love </h1>
        <CategoryCard products={allProducts} />
      </div>
    </Fragment>
  );
};
export default Shop;
