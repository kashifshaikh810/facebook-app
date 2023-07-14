import { useNavigate } from "react-router-dom";
import Header from "../../components/FindYourAccountHeader/Header";
import Footer from "../../components/Footer/Footer";
import TextInput from "../../components/TextInput/TextInput";
import "./EnterSecurityCode.css";

const EnterSecurityCode = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header isNotShow={true} />
      <div className="EnterSecurityCode-container">
        <form action="/" className="EnterSecurityCode-form">
          <div className="EnterSecurityCode-card-container">
            <div className="EnterSecurityCode-card-heading-text-container">
              <div>
                <h2 className="EnterSecurityCode-card-heading-text">
                  Enter security code
                </h2>
              </div>
            </div>
            <div className="EnterSecurityCode-card-content-container">
              <div className="EnterSecurityCode-card-content-text">
                Please check your emails for a message with your code. Your code
                is 6 numbers long.
              </div>
              <div className="EnterSecurityCode-card-content">
                <div className="EnterSecurityCode-card-content-textInput-container">
                  <TextInput
                    type="text"
                    name="text"
                    className="EnterSecurityCode-card-content-textInput"
                    placeholder="Enter code"
                  />
                </div>
                <div className="EnterSecurityCode-card-content-weSent-text-container">
                  <div className="EnterSecurityCode-card-content-weSent-text">
                    We sent your code to:
                  </div>
                  <div className="EnterSecurityCode-card-content-gmail-text">
                    k****************g@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="EnterSecurityCode-card-footer-container">
              <div className="EnterSecurityCode-card-footer">
                <div className="pt-[5px]">
                  <a href="/" className="EnterSecurityCode-card-getACode-text">
                    Didn't get a code?
                  </a>
                </div>
                <div className="float-right">
                  <a href="/" className="EnterSecurityCode-card-cancel-text">
                    Cancel
                  </a>
                  <button className="EnterSecurityCode-card-continue-button">
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

export default EnterSecurityCode;
