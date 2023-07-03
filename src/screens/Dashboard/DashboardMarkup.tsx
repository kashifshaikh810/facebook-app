import { MdClose } from "react-icons/md";

import Footer from "../../components/Footer/Footer";
import TextInput from "../../components/TextInput/TextInput";
import myPlus from "../../components/images/plus.png";

import "./Dashboard.css";
import Modal from "../../components/Modal/Modal";

const dummyData = [
  {
    id: 0,
    profileImg:
      "https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/347374312_1188554068457778_8034793456633306027_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=ePoGqXNj0cgAX8-ISW2&_nc_ht=scontent.fkhi2-2.fna&oh=00_AfDc_0YVzhWqccSZ9mL5edI2QglLzqn7JZI1zwMOl2DHlw&oe=64A873CE",
    firstName: "Muhammad",
    lastName: "Kashif",
    notificationNum: 3,
  },
  {
    id: 1,
    profileImg: "",
    firstName: "Add Account",
    lastName: "",
    notificationNum: "",
  },
];

interface IProps {
  isShowCloseIcon: any;
  setIsShowCloseIcon: Function;
  maxWidth: Number;
  navigate: Function;
  isShowSignUpModal: boolean;
  setIsShowSignUpModal: Function;
  gender: any;
  setGender: Function;
  isShowAddAccountModal: boolean;
  setIsShowAddAccountModal: Function;
  isShowRememberPassword: boolean;
  setIsShowRememberPassword: Function;
  isPasswordRememberOrNot: boolean;
  setIsPasswordRememberOrNot: Function;
  isShowExistAccountModal: boolean;
  setIsShowExistAccountModal: Function;
}

const DashboardMarkup = (props: IProps) => {
  const {
    isShowCloseIcon,
    setIsShowCloseIcon,
    maxWidth,
    gender,
    setGender,
    isShowAddAccountModal,
    setIsShowAddAccountModal,
    isShowRememberPassword,
    setIsShowRememberPassword,
    isPasswordRememberOrNot,
    setIsPasswordRememberOrNot,
    isShowExistAccountModal,
    setIsShowExistAccountModal,
    navigate,
  } = props;

  return (
    <div>
      <Modal
        isShowSignUpModal={props.isShowSignUpModal}
        setIsShowSignUpModal={props.setIsShowSignUpModal}
        gender={gender}
        setGender={setGender}
        isShowAddAccountModal={isShowAddAccountModal}
        setIsShowAddAccountModal={setIsShowAddAccountModal}
        isShowRememberPassword={isShowRememberPassword}
        setIsShowRememberPassword={setIsShowRememberPassword}
        isPasswordRememberOrNot={isPasswordRememberOrNot}
        setIsPasswordRememberOrNot={setIsPasswordRememberOrNot}
        isShowExistAccountModal={isShowExistAccountModal}
        setIsShowExistAccountModal={setIsShowExistAccountModal}
        navigate={navigate}
      />
      <div className="container">
        <div className={`content ${maxWidth > 1029 ? "ml-24" : "ml-0"}`}>
          <div className="block-one">
            <img
              src={`https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg`}
              alt={`facebook`}
              className="facebook-img"
            />
            <div className="recent-text-container">
              <div className="recent-text">Recent logins</div>
              <div className="click-text">
                Click your picture or add an account.
              </div>
            </div>
            <div className="map">
              {dummyData.map((item, i) => {
                return (
                  <div
                    key={i}
                    onClick={(e: any) =>
                      item.firstName === "Add Account"
                        ? setIsShowAddAccountModal(true)
                        : setIsShowExistAccountModal(true)
                    }
                    className={`map-container transition duration-700 ease-out ${
                      i >= 1 ? "ml-4" : ""
                    } ${
                      isShowCloseIcon?.isShown && isShowCloseIcon?.index === i
                        ? "shadow-xl"
                        : ""
                    }`}
                    onMouseEnter={() =>
                      setIsShowCloseIcon({ isShown: true, index: i })
                    }
                    onMouseLeave={() =>
                      setIsShowCloseIcon({ isShown: false, index: i })
                    }
                  >
                    {i === 0 && (
                      <span className="notifications-num">
                        {item?.notificationNum}
                      </span>
                    )}
                    {i >= 1 ? (
                      <div className="plus-icon-container">
                        <i
                          className="plus-icon"
                          style={{
                            backgroundImage: `url(${myPlus})`,
                          }}
                        ></i>
                      </div>
                    ) : (
                      <>
                        <div
                          className={`${
                            isShowCloseIcon?.isShown &&
                            isShowCloseIcon?.index === i
                              ? "close-button-containerTwo"
                              : "close-button-container"
                          }`}
                        >
                          {isShowCloseIcon?.isShown &&
                          isShowCloseIcon?.index === i ? (
                            <MdClose name="MdClose" size={20} color="#b5b5b5" />
                          ) : (
                            <div
                              className="close-button"
                              style={{
                                backgroundPosition: "-25px -43px",
                                backgroundImage: `url(${myPlus})`,
                              }}
                            />
                          )}
                        </div>
                        <img
                          src={item.profileImg}
                          alt="profile"
                          className="profile-img"
                        />
                      </>
                    )}
                    <div
                      className={`firstName ${
                        i >= 1 ? "text-[#1877f2]" : "text-[#4b4f56]"
                      }`}
                    >
                      {item.firstName}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="inputs-card-container">
            <div className="inputs-card">
              <form onSubmit={() => alert("clicked!")}>
                <div>
                  <div className="email-text-input-container">
                    <TextInput
                      placeholder="Email address or phone number"
                      className="email-text-input"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div className="email-text-input-container">
                    <TextInput
                      placeholder="Password"
                      className="email-text-input"
                      name="password"
                      type="password"
                    />
                  </div>
                </div>
                <div className="login-button-container">
                  <button type="submit" className="login-button">
                    Log in
                  </button>
                </div>

                <div className="Forgotten-text-container">
                  <a
                    href="/login/identify/"
                    onClick={(e: any) => {
                      e.preventDefault();
                      props.navigate("/login/identify/");
                    }}
                    className="Forgotten-text"
                  >
                    Forgotten password?
                  </a>
                </div>

                <div className="divider-container">
                  <div className="divider" />
                </div>

                <div className="create-acc-button-container">
                  <button
                    className="create-acc-button"
                    onClick={(e: any) => {
                      e.preventDefault();
                      props.setIsShowSignUpModal(true);
                    }}
                  >
                    Create new account
                  </button>
                </div>
              </form>
            </div>
            <div className="create-text-container">
              <span className="create-text"> Create a Page </span> for a
              celebrity, brand or business.
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default DashboardMarkup;
