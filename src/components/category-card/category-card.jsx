import "./category-card.css";
import CartButton from "../cartbutton/cartbutton";
import { useDispatch, useSelector } from "react-redux";
import { setCartItems } from "../../store/cart/cartAction";
import { makeCartItems } from "../../store/cart/cartSelector";
import { createSelector } from "reselect";
import { Fragment } from "react";

const cartItemsStateSelector = createSelector(makeCartItems, (cartItems) => ({
  cartItems,
}));

const cartItemsActionDispatcher = (dispatch) => ({
  setCartItems: (cartItems) => dispatch(setCartItems(cartItems)),
});

const CategoryCard = ({ products }) => {
  const { cartItems } = useSelector(cartItemsStateSelector);
  const { setCartItems } = cartItemsActionDispatcher(useDispatch());

  const addCartItem = (cartItems, productToAdd) => {
    console.log(cartItems);
    //  If cart contains product to add
    const existingCartItem = cartItems.find(
      (item) => item.id === productToAdd.id
    );

    //  if found increase quantity
    if (existingCartItem) {
      return cartItems.map((item) =>
        item.id === productToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    //  if not found return new array with cart item
    return [...cartItems, productToAdd];
  };

  const increaseCartItem = (newItemToAdd) => {
    setCartItems(addCartItem(cartItems, newItemToAdd));
  };

  const addingToCart = (e) => {
    const productId = e.target.parentElement.getAttribute("id").toString();
    const [added] = products.filter((product) => {
      if (product.id.toString() === productId) {
        return product;
      }
    });
    increaseCartItem(added);
  };

  const allProducts = products;
  if (products.length === 0) {
    return (
      <div className="no-products">
        <h1>No products Found</h1>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="products-container">
        {allProducts.map((product, i) => {
          return (
            <div className="product-container" key={i} id={product.id}>
              <img src={product.image} alt="" className="product-image" />
              <span className="product-title">
                {product.title.slice(0, 15)}
              </span>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <span className="product-price">$ {product.price}</span>
              </div>
              <CartButton clicked={addingToCart} />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default CategoryCard;
