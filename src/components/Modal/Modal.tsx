import TextInput from "../TextInput/TextInput";
import "./Modal.css";

interface Props {
  isShowSignUpModal?: boolean;
  isShowAddAccountModal?: boolean;
  isShowExistAccountModal?: boolean;
  setIsShowSignUpModal: Function;
}

const img = "https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/iE9yyunejFh.png";

const renderSignUpModal = (props: Props) => {
  if (props.isShowSignUpModal) {
    return (
      <div className="sign-up-modal-container">
        <div className="sign-up-modal-content">
          <div className="sign-up-modal-main">
            <div className="sign-up-modal">
              <div className="sign-up-modal-area">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/11W0xEwKS62.png"
                  alt="close"
                  className="close-image"
                  width="24"
                  height="24"
                  onClick={(e: any) => props.setIsShowSignUpModal(false)}
                />
                <div className="signup-heading-container">
                  <div className="signup-heading-text">Sign Up</div>
                  <div className="easy-heading-text">It's quick and easy.</div>
                </div>

                <div className="signup-content-container">
                  <div>
                    <div className="signup-content">
                      <form action="#" className="signup-modal-form">
                        <div className="signup-form-child">
                          <div className="fullName-field">
                            <div className="fullName-fieldChild">
                              <div className="fistName-inputField-container">
                                <div>
                                  <div className="firstName-inputField-container-child">
                                    <TextInput
                                      type="text"
                                      className="firstName-inputField"
                                      placeholder="First name"
                                      name="First name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="surname-inputField-container">
                                <div>
                                  <div className="firstName-inputField-container-child">
                                    <TextInput
                                      type="text"
                                      className="firstName-inputField"
                                      placeholder="Surname"
                                      name="Surname"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="signup-mobileNumber-input-container">
                            <div>
                              <div>
                                <TextInput
                                  type="email"
                                  className="signup-mobileNumber-input"
                                  placeholder="Mobile number email address"
                                  name="Mobile number email address"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="signup-newPassword-input-container">
                            <div>
                              <div>
                                <TextInput
                                  type="password"
                                  className="signup-newPassword-input"
                                  placeholder="New password"
                                  name="New password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="signup-dateOfBirth-container">
                            <div className="signup-dateOfBirth-text">
                              Date of birth
                              <a
                                href="/"
                                className="signup-questionIcon-container"
                              >
                                <i
                                  className="signup-questionIcon"
                                  style={{
                                    backgroundImage: `url(${img})`,
                                  }}
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const renderAddAccountModal = (props: Props) => {
  if (props.isShowAddAccountModal) {
    return (
      <div>
        <p>hello form add account modal</p>
      </div>
    );
  }
};

const renderExistAccountModal = (props: Props) => {
  if (props.isShowExistAccountModal) {
    return (
      <div>
        <p>hello form exist account modal</p>
      </div>
    );
  }
};

const Modal = (props: Props) => {
  return (
    <div>
      {renderSignUpModal(props)}

      {renderAddAccountModal(props)}

      {renderExistAccountModal(props)}
    </div>
  );
};

export default Modal;
