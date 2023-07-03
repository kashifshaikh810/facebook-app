import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../screens/Authentication/Login/Login";
import SignUp from "../screens/Authentication/SignUp/SignUp";
import Dashboard from "../screens/Dashboard/Dashboard";
import FindYourAccount from "../screens/FindYourAccount/FindYourAccount";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";

const RootNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<SignUp />} />
        <Route path="/recover/forgotPassword" element={<ForgotPassword />} />
        <Route path="/login/identify/" element={<FindYourAccount />} />
      </Routes>
    </Router>
  );
};

export default RootNavigation;
