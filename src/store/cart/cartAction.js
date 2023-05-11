import { cartTypeAction } from "./cartType";

export const setCartItems = (cartItems) => ({
  type: cartTypeAction.SET_CART_ITEMS,
  payload: cartItems,
});

// const createAction = (type, payload) => ({ type, payload });

// export const addItemToCart = (cartItems, productToAdd) => {
//   const newCartItems = addCartItem(cartItems, productToAdd);
//   return createAction(cartTypeAction.SET_CART_ITEMS, newCartItems);
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   // find the cart item to remove
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   // check if quantity is equal to 1, if it is remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   // return back cartitems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };
// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const addItemToCart = (cartItems, productToAdd) => {
//   const newCartItems = addCartItem(cartItems, productToAdd);
//   return createAction(cartTypeAction.SET_CART_ITEMS, newCartItems);
// };

// export const removeItemFromCart = (cartItems, cartItemToRemove) => {
//   const newCartItems = removeCartItem(cartItems, cartItemToRemove);
//   return createAction(cartTypeAction.SET_CART_ITEMS, newCartItems);
// };

// export const clearItemFromCart = (cartItems, cartItemToClear) => {
//   const newCartItems = clearCartItem(cartItems, cartItemToClear);
//   return createAction(cartTypeAction.SET_CART_ITEMS, newCartItems);
// };
