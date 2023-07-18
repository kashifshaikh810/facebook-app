import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import TextInput from "../../components/TextInput/TextInput";
import "./LoginAsWeb.css";

const LoginAsWeb = () => {
  const navigate = useNavigate();
  return (
    <div className="loginAsWeb-content-container">
      <div className="loginAsWeb-content">
        <div className="loginAsWeb-fb-image-container">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fb"
            className="loginAsWeb-fb-image"
          />
        </div>
        <div className="loginAsWeb-card-container">
          <div className="loginAsWeb-section-one-container">
            <span className="loginAsWeb-section-one">
              <div className="loginAsWeb-section-one-main">
                <div>
                  <div className="loginAsWeb-prof-img-container">
                    <img
                      src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/347374312_1188554068457778_8034793456633306027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ePoGqXNj0cgAX8-ISW2&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDc_0YVzhWqccSZ9mL5edI2QglLzqn7JZI1zwMOl2DHlw&oe=64A873CE"
                      alt="prof"
                      className="loginAsWeb-prof-img"
                    />
                  </div>
                  <div className="p-2">
                    <span className="loginAsWeb-text">
                      Log in as Muhammad Kashif
                    </span>
                  </div>
                </div>
                <div className="loginAsWeb-NotYou-text-container">
                  <a href="/login" className="loginAsWeb-NotYou-text">
                    Not you?
                  </a>
                </div>
              </div>
            </span>
          </div>
          <div className="loginAsWeb-section-two-container">
            <form action="/" className="loginAsWeb-form">
              <div className="loginAsWeb-password-input-container">
                <div className="loginAsWeb-password-input-main">
                  <TextInput
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="loginAsWeb-password-input"
                  />
                </div>
              </div>

              <div className="loginAsWeb-login-button-container">
                <button
                  className="loginAsWeb-login-button"
                  type="submit"
                  onClick={() => navigate("/recover/forgotPassword")}
                >
                  Log in
                </button>
              </div>

              <div className="loginAsWeb-tryAnother-button-container">
                <button
                  className="loginAsWeb-tryAnother-button"
                  type="submit"
                  onClick={() => navigate("/recover/forgotPassword")}
                >
                  Try another way
                </button>
              </div>

              <div className="loginAsWeb-forgottenPassword-container">
                <div className="loginAsWeb-forgottenPassword-main">
                  <a
                    href="/recover/forgotPassword"
                    className="loginAsWeb-forgottenPassword-text"
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

export default LoginAsWeb;
