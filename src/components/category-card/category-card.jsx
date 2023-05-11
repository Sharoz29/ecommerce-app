import "./category-card.css";
import CartButton from "../cartbutton/cartbutton";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../store/cart/cartAction";
import { makeCartItems } from "../../store/cart/cartSelector";
import { createSelector } from "reselect";

const cartItemsStateSelector = createSelector(makeCartItems, (cartItems) => ({
  cartItems,
}));

const cartItemsActionDispatcher = (dispatch) => ({
  setCartItems: (cartItems) => dispatch(setCartItems(cartItems)),
});

const CategoryCard = ({ products }) => {
  const { cartItems } = useSelector(cartItemsStateSelector);
  const { setCartItems } = cartItemsActionDispatcher(useDispatch());

  const addingToCart = (e) => {
    const productId = e.target.parentElement.getAttribute("id").toString();
    const [added] = products.filter((product) => {
      if (product.id == productId) {
        return product;
      }
    });
    setCartItems([...cartItems, added]);
  };
  console.log(cartItems);

  const allProducts = products;
  return (
    <div className="products-container">
      {allProducts.map((product, i) => {
        return (
          <div className="product-container" key={i} id={product.id}>
            <img src={product.image} alt="" className="product-image" />
            <span className="product-title">{product.title.slice(0, 15)}</span>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <span className="product-price">$ {product.price}</span>
            </div>
            <CartButton clicked={addingToCart} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;

//Set cart items to ensure no repeatition
