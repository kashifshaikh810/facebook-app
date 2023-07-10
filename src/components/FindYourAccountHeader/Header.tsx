import "./Header.css";
import FacebookImg from "../images/images.png";
import TextInput from "../TextInput/TextInput";

const Header = () => {
  return (
    <div className="findYourAccount-header-container">
      <div className="findYourAccount-facebook-img-container">
        <img
          src={FacebookImg}
          alt="face"
          className="findYourAccount-facebook-img"
        />
      </div>
      <div className="findYourAccount-section-two-container">
        <div className="findYourAccount-section-two-main">
          <form action="/">
            <div className="findYourAccount-inside-formHeader">
              <div className="findYourAccount-emailOrPhone-input-container">
                <label>
                  <TextInput
                    type="email"
                    className="findYourAccount-emailOrPhone-input"
                    placeholder="Email or phone"
                    name="email"
                  />
                </label>
              </div>
              <div className="findYourAccount-emailOrPhone-input-container">
                <label>
                  <TextInput
                    type="password"
                    className="findYourAccount-emailOrPhone-input"
                    placeholder="Password"
                    name="password"
                  />
                </label>
              </div>
              <div className="findYourAccount-emailOrPhone-input-container">
                <div>
                  <div className="findYourAccount-login-button-container">
                    <div className="findYourAccount-login-button-content">
                      <div className="findYourAccount-login-button-main">
                        <span className="findYourAccount-login-button">
                          Log in
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="findYourAccount-emailOrPhone-input-container">
                <span className="findYourAccount-forgotten-account-container">
                  <a
                    href="/"
                    className="findYourAccount-forgotten-account-text"
                  >
                    Forgotten account?
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
