import { cartTypeAction } from "./cartType";

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartTypeAction.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
