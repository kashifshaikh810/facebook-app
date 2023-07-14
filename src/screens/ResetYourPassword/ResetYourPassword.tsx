import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/FindYourAccountHeader/Header";
import Footer from "../../components/Footer/Footer";
import TextInput from "../../components/TextInput/TextInput";
import "./ResetYourPassword.css";

const ResetYourPassword = () => {
  const [isChecked, setIsChecked] = useState("send-code-via-email");
  const navigate = useNavigate();

  return (
    <div className="overflow-x-scroll">
      <Header />

      <div className="ResetYourPassword-container">
        <form action="/" className="ResetYourPassword-form-container">
          <div className="ResetYourPassword-card-container">
            <div className="ResetYourPassword-card-header-container">
              <div className="ResetYourPassword-card-heading-text-container">
                <h2 className="ResetYourPassword-card-heading-text">
                  Reset Your Password
                </h2>
              </div>
            </div>
            <div className="ResetYourPassword-card-content-container">
              <table className="ResetYourPassword-card-table">
                <tbody className="ResetYourPassword-card-tbody">
                  <tr className="ResetYourPassword-card-tr">
                    <td className="ResetYourPassword-card-td-one">
                      <div className="ResetYourPassword-howDoYou-text">
                        How do you want to receive the code to reset your
                        password?
                      </div>
                      <table className="ResetYourPassword-sendCode-table">
                        <tbody>
                          <tr
                            className="hover:bg-gray-200"
                            onClick={() => setIsChecked("send-code-via-email")}
                          >
                            <td className="ResetYourPassword-sendCode-td">
                              <label
                                htmlFor="/"
                                className="ResetYourPassword-sendCode-label"
                              >
                                <div className="ResetYourPassword-sendCode-main-container">
                                  <TextInput
                                    type="radio"
                                    name="radio"
                                    className="ResetYourPassword-sendCode-radio-button"
                                    checked={
                                      isChecked === "send-code-via-email"
                                    }
                                  />
                                  <label
                                    htmlFor="/"
                                    className="ResetYourPassword-sendEmail-label"
                                  >
                                    <div className="ResetYourPassword-sendCodeVia-container">
                                      <div className="ResetYourPassword-sendCodeVia-text">
                                        Send code via email
                                      </div>
                                      <div className="ResetYourPassword-email-text">
                                        k****************g@gmail.com
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </label>
                            </td>
                          </tr>
                          <tr
                            className="hover:bg-gray-200"
                            onClick={() =>
                              setIsChecked("enter-password-to-log-in")
                            }
                          >
                            <td className="ResetYourPassword-enterPassword-td">
                              <label htmlFor="/">
                                <div className="ResetYourPassword-enterPassword-main">
                                  <TextInput
                                    type="radio"
                                    name="radio"
                                    className="ResetYourPassword-sendCode-radio-button"
                                    checked={
                                      isChecked === "enter-password-to-log-in"
                                    }
                                  />

                                  <label
                                    htmlFor="/"
                                    className="ResetYourPassword-enterPassword-label"
                                  >
                                    <div className="ResetYourPassword-enterPassword-text-container">
                                      <div className="ResetYourPassword-enterPassword-text">
                                        Enter Password to Log In
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td className="ResetYourPassword-card-td-two">
                      <div className="ResetYourPassword-prof-img-container">
                        <img
                          src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/347374312_1188554068457778_8034793456633306027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ePoGqXNj0cgAX8-ISW2&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDc_0YVzhWqccSZ9mL5edI2QglLzqn7JZI1zwMOl2DHlw&oe=64A873CE"
                          alt="prof"
                          className="ResetYourPassword-prof-img"
                        />
                      </div>
                      <div className="ResetYourPassword-username-text">
                        Muhammad Kashif
                      </div>
                      <div className="ResetYourPassword-facebookUser-text">
                        Facebook user
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ResetYourPassword-card-footer-container">
              <div className="ResetYourPassword-card-footer-main">
                <div className="pt-[5px]">
                  <a href="/" className="ResetYourPassword-noLonger-text">
                    No longer have access to these?
                  </a>
                </div>
                <div>
                  <a href="/" className="ResetYourPassword-notYou-text">
                    Not you?
                  </a>
                  <button
                    className="ResetYourPassword-continue-button"
                    onClick={() =>
                      isChecked === "send-code-via-email"
                        ? navigate("/recover/code/")
                        : navigate("/login/device-based/regular/login/")
                    }
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer navigate={navigate} />
    </div>
  );
};

export default ResetYourPassword;
