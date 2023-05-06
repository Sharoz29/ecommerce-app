import "./navbar.css";
import Searchbar from "../searchbar/searchbar";

const Navbar = (props) => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/900/8329618900_4b72b071-24ce-4e77-b991-2dfe32b86fb5.png?cb=1683377514"
          className="logo"
          alt=""
        />
      </div>
      <Searchbar />
      <div className="signin-container">
        <span className="sign-in">Sign in</span>
      </div>
      <div className="cart-container">
        <img
          src="https://img.icons8.com/ios/50/null/shopping-cart--v1.png"
          alt=""
          className="cart-logo"
        />
      </div>
    </div>
  );
};
export default Navbar;
