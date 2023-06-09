import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import TextInput from "../../../components/TextInput/TextInput";
import "./SignUp.css";

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

const SignUp = () => {
  const [gender, setGender] = useState<any | null>({ selected: "" });
  const navigate = useNavigate();

  return (
    <>
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
                          <i
                            className="reg-questionIcon"
                            style={{
                              backgroundImage: `url(${img})`,
                            }}
                          ></i>
                        </a>
                      </div>
                    </div>
                    <div className="reg-select-container">
                      <span className="reg-select-content">
                        <span>
                          <select
                            className="reg-select-main"
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
                            className="reg-select-main ml-[12px]"
                            style={{ backgroundImage: `url(${menuImg})` }}
                          >
                            {monthNameData.map((item, index) => {
                              return (
                                <option key={index} value={item.monthName}>
                                  {item.monthName}
                                </option>
                              );
                            })}
                          </select>

                          <select
                            className="reg-select-main ml-[12px]"
                            style={{ backgroundImage: `url(${menuImg})` }}
                          >
                            {options}
                          </select>
                        </span>
                      </span>
                    </div>
                    <div className="reg-dateOfBirth-container mt-[10px] relative">
                      <div className="reg-dateOfBirth-text">
                        Gender
                        <a href="/" className="reg-questionIcon-container">
                          <i
                            className="reg-questionIcon"
                            style={{
                              backgroundImage: `url(${img})`,
                            }}
                          ></i>
                        </a>
                      </div>
                    </div>

                    <span className="reg-gender-container">
                      <span
                        className="reg-gender-map"
                        onClick={() => setGender({ selected: "Female" })}
                      >
                        <label className="reg-label">Female</label>
                        <input
                          checked={gender.selected === "Female"}
                          className="reg-input-radio"
                          type="radio"
                          value="Female"
                          name="Female"
                        />
                      </span>

                      <span
                        className="reg-gender-map"
                        onClick={() => setGender({ selected: "Male" })}
                      >
                        <label className="reg-label">Male</label>
                        <input
                          checked={gender.selected === "Male"}
                          className="reg-input-radio"
                          type="radio"
                          value="Male"
                          name="Male"
                        />
                      </span>

                      <span
                        className="reg-gender-map"
                        onClick={() => setGender({ selected: "Custom" })}
                      >
                        <label className="reg-label">Custom</label>
                        <input
                          checked={gender.selected === "Custom"}
                          className="reg-input-radio"
                          type="radio"
                          value="Custom"
                          name="Custom"
                        />
                      </span>
                    </span>

                    {gender.selected === "Custom" && (
                      <div className="reg-optionalGender-input-container">
                        <div className="reg-optionalGender-input-content">
                          <div>
                            <div>
                              <TextInput
                                type="text"
                                className="reg-optionalGender-input"
                                placeholder="Gender (optional)"
                                name="Gender (optional)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="info-text-container">
                      <p className="info-text">
                        People who use our service may have uploaded your
                        contact information to Facebook.{" "}
                        <a href="/reg" className="reg-useable-text">
                          Learn more.
                        </a>
                      </p>
                    </div>

                    <div className="by-clicking-container">
                      <p className="by-clicking-text">
                        By clicking Sign Up, you agree to our{" "}
                        <a href="#reg" className="reg-useable-text">
                          Terms,{" "}
                        </a>{" "}
                        <a href="#reg" className="reg-useable-text">
                          Privacy Policy{" "}
                        </a>{" "}
                        and{" "}
                        <a href="#reg" className="reg-useable-text">
                          Cookies Policy.{" "}
                        </a>{" "}
                        You may receive SMS notifications from us and can opt
                        out at any time.
                      </p>
                    </div>

                    <div className="reg-button-container">
                      <button className="reg-button">Sign Up</button>
                    </div>

                    <div className="reg-already-account">
                      <a href="#reg" className="reg-already-account-text">
                        Already have an account?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer navigate={navigate} />
    </>
  );
};

export default SignUp;
