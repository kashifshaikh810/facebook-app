import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import TextInput from "../../../components/TextInput/TextInput";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="login-container">
        <div className="fb-img-container">
          <img
            src={`https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg`}
            alt={`facebook`}
            className="fb-img"
          />
        </div>
        <div className="input-card-container">
          <div className="input-card">
            <div className="in-to-facebook-container">
              <span className="in-to-content">
                <div>Log in to Facebook</div>
              </span>
            </div>
            <form onSubmit={() => alert("clicked!")}>
              <div>
                <div className="text-input-container">
                  <TextInput
                    placeholder="Email address or phone number"
                    className="text-input"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="text-input-container">
                  <TextInput
                    placeholder="Password"
                    className="text-input"
                    name="password"
                    type="password"
                  />
                </div>
              </div>
              <div className="button-container">
                <button type="submit" className="button">
                  Log in
                </button>
              </div>

              <div className="text-container">
                <a href="/" className="text">
                  Forgotten password?
                </a>
              </div>

              <div className="or-text-container">
                <div className="divider" />
                <span className="or-text">or</span>
                <div className="divider" />
              </div>

              <div className="acc-button-container">
                <button className="acc-button">Create new account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer navigate={navigate} />
    </div>
  );
};

export default Login;
