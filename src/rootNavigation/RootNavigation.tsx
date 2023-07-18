import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../screens/Authentication/Login/Login";
import SignUp from "../screens/Authentication/SignUp/SignUp";
import Dashboard from "../screens/Dashboard/Dashboard";
import EnterSecurityCode from "../screens/EnterSecurityCode/EnterSecurityCode";
import FindYourAccount from "../screens/FindYourAccount/FindYourAccount";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import LoginAs from "../screens/LoginAs/LoginAs";
import LoginAsWeb from "../screens/LoginAsWeb/LoginAsWeb";
import ResetYourPassword from "../screens/ResetYourPassword/ResetYourPassword";

const RootNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/:isHide" element={<Login isHide={true} />} />
        <Route path="/reg" element={<SignUp />} />
        <Route path="/recover/forgotPassword" element={<ForgotPassword />} />
        <Route path="/login/identify/" element={<FindYourAccount />} />
        <Route
          path="/login/device-based/regular/login/"
          element={<LoginAs />}
        />
        <Route path="/recover/initiate/" element={<ResetYourPassword />} />
        <Route path="/recover/code/" element={<EnterSecurityCode />} />
        <Route path="/login/web" element={<LoginAsWeb />} />
      </Routes>
    </Router>
  );
};

export default RootNavigation;
