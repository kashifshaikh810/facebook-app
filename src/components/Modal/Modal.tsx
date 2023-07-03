import TextInput from "../TextInput/TextInput";
import "./Modal.css";

interface Props {
  isShowSignUpModal?: boolean;
  isShowAddAccountModal?: boolean;
  setIsShowAddAccountModal: Function;
  setIsShowSignUpModal: Function;
  gender: any;
  setGender: Function;
  isShowRememberPassword: boolean;
  setIsShowRememberPassword: Function;
  isPasswordRememberOrNot: boolean;
  setIsPasswordRememberOrNot: Function;
  isShowExistAccountModal: boolean;
  setIsShowExistAccountModal: Function;
  navigate: Function;
}

const img = "https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/iE9yyunejFh.png";
const menuImg = "https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Yrq8Y9PlN02.png";
const closeImg = "https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/jwd5lloJQRM.png";

const numbersData = [
  { i: 0, number: 1 },
  { i: 1, number: 2 },
  { i: 2, number: 3 },
  { i: 3, number: 4 },
  { i: 4, number: 5 },
  { i: 5, number: 6 },
  { i: 6, number: 7 },
  { i: 7, number: 8 },
  { i: 8, number: 9 },
  { i: 9, number: 10 },
  { i: 10, number: 11 },
  { i: 11, number: 12 },
  { i: 12, number: 13 },
  { i: 13, number: 14 },
  { i: 14, number: 15 },
  { i: 15, number: 16 },
  { i: 16, number: 17 },
  { i: 17, number: 18 },
  { i: 18, number: 19 },
  { i: 19, number: 20 },
  { i: 20, number: 21 },
  { i: 21, number: 22 },
  { i: 22, number: 23 },
  { i: 23, number: 24 },
  { i: 24, number: 25 },
  { i: 25, number: 26 },
  { i: 26, number: 27 },
  { i: 27, number: 28 },
  { i: 28, number: 29 },
  { i: 29, number: 30 },
  { i: 30, number: 31 },
];

const monthNameData = [
  { i: 0, monthName: "Jan" },
  { i: 1, monthName: "Feb" },
  { i: 2, monthName: "Mar" },
  { i: 3, monthName: "Apr" },
  { i: 4, monthName: "May" },
  { i: 5, monthName: "Jun" },
  { i: 6, monthName: "Jul" },
  { i: 7, monthName: "Aug" },
  { i: 8, monthName: "Sep" },
  { i: 9, monthName: "Oct" },
  { i: 10, monthName: "Nov" },
  { i: 11, monthName: "Dec" },
];

const minOffset = 0;
const maxOffset = 118;

const thisYear = new Date().getFullYear();

const options: any = [];
for (let i = minOffset; i <= maxOffset; i++) {
  const year = thisYear - i;
  options.push(<option value={year}>{year}</option>);
}

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
                          <div className="signup-select-container">
                            <span className="signup-select-content">
                              <span>
                                <select
                                  className="signup-select-main"
                                  style={{ backgroundImage: `url(${menuImg})` }}
                                >
                                  {numbersData.map((item, index) => {
                                    return (
                                      <option key={index} value={item.number}>
                                        {item.number}
                                      </option>
                                    );
                                  })}
                                </select>

                                <select
                                  className="signup-select-main ml-[12px]"
                                  style={{ backgroundImage: `url(${menuImg})` }}
                                >
                                  {monthNameData.map((item, index) => {
                                    return (
                                      <option
                                        key={index}
                                        value={item.monthName}
                                      >
                                        {item.monthName}
                                      </option>
                                    );
                                  })}
                                </select>

                                <select
                                  className="signup-select-main ml-[12px]"
                                  style={{ backgroundImage: `url(${menuImg})` }}
                                >
                                  {options}
                                </select>
                              </span>
                            </span>
                          </div>
                          <div className="signup-dateOfBirth-container mt-[10px] relative">
                            <div className="signup-dateOfBirth-text">
                              Gender
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

                          <span className="signup-gender-container">
                            <span
                              className="signup-gender-map"
                              onClick={() =>
                                props.setGender({ selected: "Female" })
                              }
                            >
                              <label className="signup-label">Female</label>
                              <input
                                checked={props.gender.selected === "Female"}
                                className="signup-input-radio"
                                type="radio"
                                value="Female"
                                name="Female"
                              />
                            </span>

                            <span
                              className="signup-gender-map"
                              onClick={() =>
                                props.setGender({ selected: "Male" })
                              }
                            >
                              <label className="signup-label">Male</label>
                              <input
                                checked={props.gender.selected === "Male"}
                                className="signup-input-radio"
                                type="radio"
                                value="Male"
                                name="Male"
                              />
                            </span>

                            <span
                              className="signup-gender-map"
                              onClick={() =>
                                props.setGender({ selected: "Custom" })
                              }
                            >
                              <label className="signup-label">Custom</label>
                              <input
                                checked={props.gender.selected === "Custom"}
                                className="signup-input-radio"
                                type="radio"
                                value="Custom"
                                name="Custom"
                              />
                            </span>
                          </span>

                          {props.gender.selected === "Custom" && (
                            <div className="signup-optionalGender-input-container">
                              <div className="signup-optionalGender-input-content">
                                <div>
                                  <div>
                                    <TextInput
                                      type="text"
                                      className="signup-optionalGender-input"
                                      placeholder="Gender (optional)"
                                      name="Gender (optional)"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="signup-info-text-container">
                            <p
                              className={`signup-info-text ${
                                props.gender.selected === "Custom"
                                  ? ``
                                  : `mt-[15px]`
                              }`}
                            >
                              People who use our service may have uploaded your
                              contact information to Facebook.{" "}
                              <a href="/" className="signup-useable-text">
                                Learn more.
                              </a>
                            </p>
                          </div>

                          <div className="signup-by-clicking-container">
                            <p className="signup-by-clicking-text">
                              By clicking Sign Up, you agree to our{" "}
                              <a href="/" className="signup-useable-text">
                                Terms,{" "}
                              </a>{" "}
                              <a href="/" className="signup-useable-text">
                                Privacy Policy{" "}
                              </a>{" "}
                              and{" "}
                              <a href="/" className="signup-useable-text">
                                Cookies Policy.{" "}
                              </a>{" "}
                              You may receive SMS notifications from us and can
                              opt out at any time.
                            </p>
                          </div>

                          <div className="reg-button-container">
                            <button className="reg-button">Sign Up</button>
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
      <div className="addAccount-modal-container">
        <div className="addAccount-modal-content">
          <div className="addAccount-modal-main">
            <div className="addAccount-modal">
              <div className="addAccount-modal-area">
                <div className="addAccount-close-container">
                  <div
                    className="addAccount-close-content"
                    onClick={(e: any) => props.setIsShowAddAccountModal(false)}
                  >
                    <i
                      className="addAccount-close"
                      style={{ backgroundImage: `url(${closeImg})` }}
                    />
                  </div>
                </div>
                <div className="addAccount-heading-container">
                  Log in to Facebook
                </div>

                <div className="addAccount-content-container">
                  <div>
                    <div className="addAccount-content">
                      <form action="#" className="addAccount-modal-form">
                        <div className="addAccount-form-child">
                          <div className="addAccount-mobileNumber-input-container">
                            <div>
                              <div>
                                <TextInput
                                  type="email"
                                  className="addAccount-mobileNumber-input"
                                  placeholder="Mobile number email address"
                                  name="Mobile number email address"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="addAccount-newPassword-input-container">
                            <div>
                              <div>
                                <TextInput
                                  type="password"
                                  className="addAccount-newPassword-input"
                                  placeholder="Password"
                                  name="Password"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="addAccount-remember-container">
                            <label
                              className="addAccount-remember-content"
                              onClick={(e: any) =>
                                props.setIsPasswordRememberOrNot(
                                  !props.isPasswordRememberOrNot
                                )
                              }
                              onMouseEnter={(e: any) =>
                                props.setIsShowRememberPassword(true)
                              }
                              onMouseOut={(e: any) =>
                                props.setIsShowRememberPassword(false)
                              }
                            >
                              <span
                                onMouseEnter={(e: any) =>
                                  props.setIsShowRememberPassword(true)
                                }
                                onMouseOut={(e: any) =>
                                  props.setIsShowRememberPassword(false)
                                }
                                className={`checkbox-before ${
                                  props.isPasswordRememberOrNot
                                    ? `bg-[#1877f2]`
                                    : ``
                                } ${
                                  !props.isPasswordRememberOrNot
                                    ? props.isShowRememberPassword
                                      ? `bg-gray-100`
                                      : ``
                                    : ``
                                }`}
                              >
                                {props.isPasswordRememberOrNot && (
                                  <span className="checkbox-after"></span>
                                )}
                              </span>
                              <div className="addAccount-remember-text">
                                Remember password
                              </div>
                            </label>
                          </div>

                          <div className="addAccount-login-button-container">
                            <button className="addAccount-login-button">
                              Log in
                            </button>
                          </div>

                          <div className="addAccount-forgot-text-container">
                            <a
                              href="/recover/forgotPassword"
                              onClick={(e: any) => {
                                e.preventDefault();
                                props.navigate("/recover/forgotPassword");
                              }}
                              className="addAccount-forgot-text"
                            >
                              Forgotten password?
                            </a>
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

const renderExistAccountModal = (props: Props) => {
  if (props.isShowExistAccountModal) {
    return (
      <div className="existAccount-modal-container">
        <div className="existAccount-modal-content">
          <div className="existAccount-modal-main">
            <div className="existAccount-modal">
              <div className="existAccount-modal-area">
                <div className="existAccount-close-container">
                  <div
                    className="existAccount-close-content"
                    onClick={(e: any) =>
                      props.setIsShowExistAccountModal(false)
                    }
                  >
                    <i
                      className="existAccount-close"
                      style={{ backgroundImage: `url(${closeImg})` }}
                    />
                  </div>
                </div>

                <div className="existAccount-content-container">
                  <div>
                    <div className="existAccount-content">
                      <img
                        src="https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/347374312_1188554068457778_8034793456633306027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ePoGqXNj0cgAX8-ISW2&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDc_0YVzhWqccSZ9mL5edI2QglLzqn7JZI1zwMOl2DHlw&oe=64A873CE"
                        alt="prof"
                        className="existAccount-profImg"
                      />
                      <form action="#" className="existAccount-modal-form">
                        <div className="existAccount-form-child">
                          <div className="existAccount-profileName-container">
                            <div>
                              <div>
                                <div className="existAccount-profileName">
                                  Muhammad Kashif
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="existAccount-newPassword-input-container">
                            <div>
                              <div>
                                <TextInput
                                  type="password"
                                  className="existAccount-newPassword-input"
                                  placeholder="Password"
                                  name="Password"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="existAccount-remember-container">
                            <label
                              className="existAccount-remember-content"
                              onClick={(e: any) =>
                                props.setIsPasswordRememberOrNot(
                                  !props.isPasswordRememberOrNot
                                )
                              }
                              onMouseEnter={(e: any) =>
                                props.setIsShowRememberPassword(true)
                              }
                              onMouseOut={(e: any) =>
                                props.setIsShowRememberPassword(false)
                              }
                            >
                              <span
                                onMouseEnter={(e: any) =>
                                  props.setIsShowRememberPassword(true)
                                }
                                onMouseOut={(e: any) =>
                                  props.setIsShowRememberPassword(false)
                                }
                                className={`existAccount-checkbox-before ${
                                  props.isPasswordRememberOrNot
                                    ? `bg-[#1877f2]`
                                    : ``
                                } ${
                                  !props.isPasswordRememberOrNot
                                    ? props.isShowRememberPassword
                                      ? `bg-gray-100`
                                      : ``
                                    : ``
                                }`}
                              >
                                {props.isPasswordRememberOrNot && (
                                  <span className="existAccount-checkbox-after"></span>
                                )}
                              </span>
                              <div className="existAccount-remember-text">
                                Remember password
                              </div>
                            </label>
                          </div>

                          <div className="existAccount-login-button-container">
                            <button className="existAccount-login-button">
                              Log in
                            </button>
                          </div>

                          <div className="existAccount-forgot-text-container">
                            <a
                              href="/recover/forgotPassword"
                              onClick={(e: any) => {
                                e.preventDefault();
                                props.navigate("/recover/forgotPassword");
                              }}
                              className="existAccount-forgot-text"
                            >
                              Forgotten password?
                            </a>
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
