import "./category-card.css";
import CartButton from "../cartbutton/cartbutton";

const CategoryCard = ({ products }) => {
  const allProducts = products;
  return (
    <div className="products-container">
      {allProducts?.map((product, i) => {
        return (
          <div className="product-container" key={i}>
            <img src={product.image} alt="" className="product-image" />
            <span className="product-title">{product.title?.slice(0, 15)}</span>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <span className="product-price">$ {product.price}</span>
            </div>
            <CartButton />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
