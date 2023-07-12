import Header from "../../components/FindYourAccountHeader/Header";
import TextInput from "../../components/TextInput/TextInput";
import "./ResetYourPassword.css";

const ResetYourPassword = () => {
  return (
    <div>
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
                          <tr>
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
                          <tr>
                            <td className="ResetYourPassword-enterPassword-td">
                              <label htmlFor="/">
                                <div className="ResetYourPassword-enterPassword-main">
                                  <TextInput
                                    type="radio"
                                    name="radio"
                                    className="ResetYourPassword-sendCode-radio-button"
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
                      <div>
                        <img
                          src="https://www.facebook.com/profile/pic.php?cuid=AYjP5SBfoS0j6e7mRSg_ltcXf6-6G6H9P-CUvIQ2XeyZ2zIogi8ro-f1xwlVmKBOtTBFDpHrtsZeLH7Tv_JV8f_QzrrN3wOigI_rOzdb3hrG6Q&square_px=50"
                          alt="prof"
                        />
                      </div>
                      <div>d</div>
                      <div>d</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ResetYourPassword-card-footer-container"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetYourPassword;
