import TextInput from "../TextInput/TextInput";
import "./Modal.css";

interface Props {
  isShowSignUpModal?: boolean;
  isShowAddAccountModal?: boolean;
  setIsShowAddAccountModal: Function;
  isShowExistAccountModal?: boolean;
  setIsShowSignUpModal: Function;
  gender: any;
  setGender: Function;
}

const img = "https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/iE9yyunejFh.png";
const menuImg = "https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/Yrq8Y9PlN02.png";

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
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/11W0xEwKS62.png"
                  alt="close"
                  className="close-image"
                  width="24"
                  height="24"
                  onClick={(e: any) => props.setIsShowAddAccountModal(false)}
                />
                <div className="signup-heading-container">
                  <div className="signup-heading-text">add account modal</div>
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
