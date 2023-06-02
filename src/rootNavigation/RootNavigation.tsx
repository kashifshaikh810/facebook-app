import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../screens/Authentication/Login/Login";
import Dashboard from "../screens/Dashboard/Dashboard";

const RootNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RootNavigation;
