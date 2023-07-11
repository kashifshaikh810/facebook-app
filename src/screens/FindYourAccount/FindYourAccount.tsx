import { useNavigate } from "react-router-dom";
import Header from "../../components/FindYourAccountHeader/Header";
import Footer from "../../components/Footer/Footer";
import TextInput from "../../components/TextInput/TextInput";
import "./FindYourAccount.css";

const FindYourAccount = () => {
  const navigate = useNavigate();
  return (
    <div style={{ zoom: 1 }}>
      <Header />
      <div className="findYourAccount-container">
        <div>
          <form action="/" className="findYourAccount-form">
            <div className="findYourAccount-inside-form">
              <div className="findYourAccount-titleHeading">
                <h2>Find Your Account</h2>
              </div>
              <div className="findYourAccount-content-container">
                <div className="findYourAccount-content">
                  <table className="border-spacing-0">
                    <tbody>
                      <tr>
                        <td>{/* empty */}</td>
                        <td>
                          <div className="findYourAccount-subtitle">
                            Please enter your email address or mobile number to
                            search for your account.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <TextInput
                            type="email"
                            name="email"
                            className="findYourAccount-screen-textInput"
                            placeholder="Email address or mobile number"
                          />
                        </td>
                      </tr>
                      <tr>{/* if errors please you can show */}</tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="findYourAccount-footer-container">
                <div className="findYourAccount-footer-content-container">
                  <div className="findYourAccount-footer-content">
                    <a
                      href="/"
                      className="findYourAccount-footer-cancel-button"
                    >
                      Cancel
                    </a>
                    <button
                      type="submit"
                      className="findYourAccount-footer-search-button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer navigate={navigate} />
    </div>
  );
};

export default FindYourAccount;
