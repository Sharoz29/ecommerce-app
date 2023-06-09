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
import Footer from "../../components/footer/footer";
import { useState, useEffect } from "react";

const cartItemsStateSelector = createSelector(makeCartItems, (cartItems) => ({
  cartItems,
}));

const cartItemsActionDispatcher = (dispatch) => ({
  setCartItems: (cartItems) => dispatch(setCartItems(cartItems)),
});

const Cart = () => {
  const { cartItems } = useSelector(cartItemsStateSelector);
  const { setCartItems } = cartItemsActionDispatcher(useDispatch());
  const [subtotal, setSubtotal] = useState("");

  const { user } = useAuth0();

  const clearCartItems = () => {
    setCartItems([]);
  };

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

  const increasingCartItem = (e) => {
    const cartItemId = e.target.parentElement.getAttribute("id");
    const [added] = cartItems.filter((product) => {
      if (product.id.toString() === cartItemId) {
        return product;
      }
    });
    increaseCartItem(added);
  };

  const decreaseCartItem = (cartItems, cartItemToDecrease) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToDecrease.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToDecrease.id
      );
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToDecrease.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  const decreasedCartItem = (cartItems, cartItemToRemove) => {
    setCartItems(decreaseCartItem(cartItems, cartItemToRemove));
  };

  const decreasingCartItem = (e) => {
    const cartItemId = e.target.parentElement.getAttribute("id");
    const [decreased] = cartItems.filter((product) => {
      if (product.id.toString() === cartItemId) {
        return product;
      }
    });
    decreasedCartItem(cartItems, decreased);
  };

  const removeCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  };

  const removedCartItem = (cartItems, cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const removingItemFromCart = (e) => {
    const cartItemId = e.target.parentElement.getAttribute("id");
    const [removed] = cartItems.filter((product) => {
      if (product.id.toString() === cartItemId) {
        return product;
      }
    });

    removedCartItem(cartItems, removed);
  };

  useEffect(() => {
    const newCartSubtotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setSubtotal(newCartSubtotal);
  }, [cartItems]);

  return (
    <Fragment>
      <Navbar />
      {cartItems.length !== 0 ? (
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
                <span className="cart-item-name">
                  {item.title.slice(0, 15)}
                </span>
              </div>
              <div className="cart-item-price-container">
                <span className="cart-item-price">${item.price}</span>
              </div>
              <div className="cart-item-quantity-container">
                <span className="cart-item-quantity" id={item.id}>
                  <span
                    className="change-quantity"
                    onClick={decreasingCartItem}
                  >
                    &#8722;
                  </span>{" "}
                  {item.quantity}{" "}
                  <span
                    className="change-quantity"
                    onClick={increasingCartItem}
                  >
                    &#43;
                  </span>
                </span>
              </div>
              <div className="cart-item-subtotal-container">
                <span className="cart-item-subtotal">{`$${(
                  item.price * item.quantity
                ).toFixed(2)}`}</span>
              </div>
              <div className="cart-item-clear-container" id={item.id}>
                <span
                  className="cart-item-clear"
                  onClick={removingItemFromCart}
                >
                  {" "}
                  &#10060;
                </span>
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
              <span className="statement-value">
                ${Number(subtotal).toFixed(2)}
              </span>
            </div>
            <div className="statement-shipping-container sc">
              <span className="statement-title">Shipping Fee:</span>
              <span className="statement-value">$9.99</span>
            </div>
            <div className="statement-total-container sc">
              <span className="statement-title">Order Total:</span>
              <span className="statement-value">{`$${Number(
                subtotal + 9.99
              ).toFixed(2)}`}</span>
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
      ) : (
        <div className="empty-cart-container">
          <span className="empty-cart">Your cart is empty :(</span>
          <Link to="/shop" className=" other continue-shopping">
            Continue Shopping
          </Link>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};
export default Cart;
