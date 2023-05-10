import "./sign-in.css";
import { useAuth0 } from "@auth0/auth0-react";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div className="sign-in-outer-container">
      <div className="sign-in-container"></div>
      <div className="sign-in">
        <button
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};
export default SignIn;
