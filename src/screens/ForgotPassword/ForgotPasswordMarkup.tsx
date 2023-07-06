import Footer from "../../components/Footer/Footer";
import "./ForgotPassword.css";

const ForgotPasswordMarkup = (props: any) => {
  return (
    <div className="forgotPass-container">
      <div className="forgotPass-child">
        <div>
          <div className="forgotPass-card">
            <form action="/" className="forgotPass-form">
              <div className="forgotPass-card-main">
                <div className="forgotPass-card-header">
                  <div>
                    <h2 className="forgotPass-card-header-text">
                      We'll send you a code to your email address
                    </h2>
                  </div>
                </div>

                <div className="forgotPass-card-content">
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td className="forgotPass-td-first">
                            <div className="forgotPass-td-first-child">
                              We can send a login code to:
                            </div>
                            <div className="forgotPass-hide-container">
                              <div className="forgotPass-hide-text">
                                k****************g@gmail.com
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="forgotPass-td-second">
                              <div className="forgotPass-td-second-child">
                                <div className="forgotPass-profImg-container">
                                  <img
                                    className="forgotPass-profImg"
                                    src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/347374312_1188554068457778_8034793456633306027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ePoGqXNj0cgAX8-ISW2&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDc_0YVzhWqccSZ9mL5edI2QglLzqn7JZI1zwMOl2DHlw&oe=64A873CE"
                                    alt="prof-img"
                                  />
                                </div>

                                <div className="userName-container">
                                  <div className="userName-text">
                                    Muhammad Kashif
                                  </div>
                                </div>

                                <div className="facebook-user-container">
                                  <div className="facebook-user-text">
                                    Facebook user
                                  </div>
                                </div>

                                <a
                                  href="/"
                                  className="forgotPassword-notYour-text"
                                >
                                  Not you?
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="forgotPassword-footer-container">
                  <div className="forgotPassword-footer-main">
                    <div className="forgotPassword-two-buttons-container">
                      <a href="/" className="forgotPassword-try-another-text">
                        Try another way
                      </a>
                      <button className="forgotPassword-continue-button">
                        Continue
                      </button>
                    </div>

                    <div className="forgotPassword-loginWith-text-container">
                      <a className="forgotPassword-loginWith-text" href="/">
                        Log in with password
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer navigate={props.navigate} />
    </div>
  );
};

export default ForgotPasswordMarkup;
