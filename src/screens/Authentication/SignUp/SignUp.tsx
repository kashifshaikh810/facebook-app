import { FaQuestion } from "react-icons/fa";

import TextInput from "../../../components/TextInput/TextInput";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="reg-container">
      <div className="reg-img-container">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="fb-img"
          className="reg-img"
        />
      </div>
      <div className="reg-card-container">
        <div className="reg-card-content">
          <div className="reg-account-container">
            <div className="reg-account-text">Create a new account</div>
            <div className="it-quick-text">It's quick and easy.</div>
          </div>
          <div>
            <div className="reg-box-container">
              <div className="reg-box">
                <form action="/" className="reg-form">
                  <div>
                    <div className="full-name-inputs">
                      <div className="reg-firstName-input-container">
                        <TextInput
                          type="text"
                          className="reg-firstName-input"
                          placeholder="First name"
                          name="First name"
                        />
                      </div>
                      <div className="reg-lastName-input-container">
                        <TextInput
                          type="text"
                          className="reg-lastName-input"
                          placeholder="Last name"
                          name="Last name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="reg-mobileNumber-input-container">
                    <div>
                      <div>
                        <TextInput
                          type="email"
                          className="reg-mobileNumber-input"
                          placeholder="Mobile number email address"
                          name="Mobile number email address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="reg-newPassword-input-container">
                    <div>
                      <div>
                        <TextInput
                          type="password"
                          className="reg-newPassword-input"
                          placeholder="New Password"
                          name="Password"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="reg-dateOfBirth-container">
                    <div className="reg-dateOfBirth-text">
                      Date of birth
                      <a href="/" className="reg-questionIcon-container">
                        <FaQuestion name="FaQuestion" className="" />
                      </a>
                    </div>
                    <div></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
