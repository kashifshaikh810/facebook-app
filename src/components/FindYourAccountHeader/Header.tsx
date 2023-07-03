import "./Header.css";
import FacebookImg from "../images/images.png";

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
            <div className="findYourAccount-inside-form"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
