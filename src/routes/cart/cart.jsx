import "./cart.css";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { user } = useAuth0();
  console.log(user);

  return <div>Hello again</div>;
};
export default Cart;
