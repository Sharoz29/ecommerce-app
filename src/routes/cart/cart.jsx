import "./cart.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import { createSelector } from "reselect";
import { makeCartItems } from "../../store/cart/cartSelector";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCartItems } from "../../store/cart/cartAction";
import { useDispatch } from "react-redux";

const cartItemsStateSelector = createSelector(makeCartItems, (cartItems) => ({
  cartItems,
}));

const cartItemsActionDispatcher = (dispatch) => ({
  setCartItems: (cartItems) => dispatch(setCartItems(cartItems)),
});

const Cart = () => {
  const { cartItems } = useSelector(cartItemsStateSelector);
  const { setCartItems } = cartItemsActionDispatcher(useDispatch());

  const { user } = useAuth0();
  // console.log(user, cartItems);

  const clearCartItems = () => {
    setCartItems([]);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="cart-items-container">
        <div className="cart-items-titles">
          <span className="cart-item-title">Item</span>
          <span className="cart-item-title">Price</span>
          <span className="cart-item-title">Quantity</span>
          <span className="cart-item-title">Subtotal</span>
        </div>
        {cartItems.map((item, i) => (
          <div className="cart-item-container" key={i}>
            <div className="img-name-container">
              <img className="cart-item-img" src={item.image} alt="" />
              <span className="cart-item-name">{item.title.slice(0, 15)}</span>
            </div>
            <div className="cart-item-price-container">
              <span className="cart-item-price">${item.price}</span>
            </div>
            <div className="cart-item-quantity-container">
              <span className="cart-item-quantity">
                <span className="change-quantity">&#8722;</span> {item.quantity}{" "}
                <span className="change-quantity">&#43;</span>
              </span>
            </div>
            <div className="cart-item-subtotal-container">
              <span className="cart-item-subtotal">${item.price}</span>
            </div>
            <div className="cart-item-clear-container">
              <span className="cart-item-clear"> &#10060;</span>
            </div>
          </div>
        ))}
        <div className="other-buttons">
          <Link to="/shop" className=" other continue-shopping">
            Continue Shopping
          </Link>
          <span className="other clear-cart" onClick={clearCartItems}>
            Clear Cart
          </span>
        </div>
        <div className="statement-container">
          <div className="statement-subtotal-container sc">
            <span className="statement-title">Subtotal:</span>
            <span className="statement-value">$100</span>
          </div>
          <div className="statement-shipping-container sc">
            <span className="statement-title">Shipping Fee:</span>
            <span className="statement-value">$9.99</span>
          </div>
          <div className="statement-total-container sc">
            <span className="statement-title">Order Total:</span>
            <span className="statement-value">$1000</span>
          </div>
          {user ? (
            <span className="take-to-checkout ">
              Proceed to{" "}
              <Link to="/checkout" className="checkout-link">
                Checkout{" "}
              </Link>
              {user.nickname}?
            </span>
          ) : (
            <span>You need to be logged in to confirm order</span>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default Cart;
