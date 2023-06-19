import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../screens/Authentication/Login/Login";
import SignUp from "../screens/Authentication/SignUp/SignUp";
import Dashboard from "../screens/Dashboard/Dashboard";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";

const RootNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<SignUp />} />
        <Route path="/recover/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default RootNavigation;
