import "./cart.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";

const Cart = () => {
  const { user } = useAuth0();
  console.log(user);

  return (
    <Fragment>
      <Navbar />
    </Fragment>
  );
};
export default Cart;
