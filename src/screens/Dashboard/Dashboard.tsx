import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardMarkup from "./DashboardMarkup";

interface IState {
  isShown?: boolean | false;
  index?: number;
}

const Dashboard = () => {
  const [isShowCloseIcon, setIsShowCloseIcon] = useState<IState>();
  const [isShowSignUpModal, setIsShowSignUpModal] = useState<boolean>(false);

  const navigate = useNavigate();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DashboardMarkup
      isShowCloseIcon={isShowCloseIcon}
      setIsShowCloseIcon={setIsShowCloseIcon}
      maxWidth={windowDimensions?.width}
      navigate={navigate}
      isShowSignUpModal={isShowSignUpModal}
      setIsShowSignUpModal={setIsShowSignUpModal}
    />
  );
};

export default Dashboard;
