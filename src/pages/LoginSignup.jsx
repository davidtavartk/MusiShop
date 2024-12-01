import { useState } from "react";
import "./CSS/LoginSignup.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(true);

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isSignup ? "Sign Up" : "Login"}</h1>
        <div className="loginsignup-fields">
          {isSignup && <input type="text" placeholder="Your Name" />}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>{isSignup ? "Register" : "Login"}</button>
          <p className="loginsignup-toggle">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <span onClick={toggleMode}>Login Here</span>
              </>
            ) : (
              <>
                Don’t have an account? <span onClick={toggleMode}>Sign Up</span>
              </>
            )}
          </p>

          {isSignup && (
            <div className="loginsignup-agree">
              <input type="checkbox" id="agree" />
              <p>
                By continuing, I agree to the terms of use & privacy policy.
              </p>
            </div>
          )}

          <div className="separator">or</div>
          <button className="facebook-button">
            <i className="fab fa-facebook-f"></i> Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
