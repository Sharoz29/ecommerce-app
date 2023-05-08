import useFetcher from "../../fetcher";
import "./shop.css";
import { requests } from "../../requests";

const Shop = () => {
  const [allProducts] = useFetcher(requests.allProducts);

  return (
    <div className="all-container">
      <h1>Find something you love </h1>
      {allProducts.map((product, i) => {
        return (
          <div className="product-container" key={i}>
            <img src={product.image} alt="" />
            <span className="product-title">{product.title}</span>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <span className="product-price">$ {product.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
