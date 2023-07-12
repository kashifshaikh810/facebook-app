import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import TextInput from "../../components/TextInput/TextInput";
import "./LoginAs.css";

const LoginAs = () => {
  const navigate = useNavigate();
  return (
    <div className="loginAs-content-container">
      <div className="loginAs-content">
        <div className="loginAs-fb-image-container">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fb"
            className="loginAs-fb-image"
          />
        </div>
        <div className="loginAs-card-container">
          <div className="loginAs-section-one-container">
            <span className="loginAs-section-one">
              <div className="loginAs-section-one-main">
                <div>
                  <div className="loginAs-prof-img-container">
                    <img
                      src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/347374312_1188554068457778_8034793456633306027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ePoGqXNj0cgAX8-ISW2&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDc_0YVzhWqccSZ9mL5edI2QglLzqn7JZI1zwMOl2DHlw&oe=64A873CE"
                      alt="prof"
                      className="loginAs-prof-img"
                    />
                  </div>
                  <div className="p-2">
                    <span className="loginAs-text">
                      Log in as Muhammad Kashif
                    </span>
                  </div>
                </div>
                <div className="loginAs-NotYou-text-container">
                  <a href="/login" className="loginAs-NotYou-text">
                    Not you?
                  </a>
                </div>
              </div>
            </span>
          </div>
          <div className="loginAs-section-two-container">
            <form action="/" className="loginAs-form">
              <div className="loginAs-showing-error-container">
                <div className="loginAs-wrong-credentials">
                  Wrong credentials
                </div>
                <div className="loginAs-invalid-username">
                  Invalid username or password
                </div>
              </div>
              <div className="loginAs-password-input-container">
                <div className="loginAs-password-input-main">
                  <TextInput
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="loginAs-password-input"
                  />
                </div>
              </div>

              <div className="loginAs-login-button-container">
                <button
                  className="loginAs-login-button"
                  type="submit"
                  onClick={() => navigate("/recover/forgotPassword")}
                >
                  Log in
                </button>
              </div>

              <div className="loginAs-forgottenPassword-container">
                <div className="loginAs-forgottenPassword-main">
                  <a
                    href="/recover/forgotPassword"
                    className="loginAs-forgottenPassword-text"
                  >
                    Forgotten Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
};

export default LoginAs;
