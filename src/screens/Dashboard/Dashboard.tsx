import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardMarkup from "./DashboardMarkup";

interface IState {
  isShown: boolean | false;
  index: number;
}

const defaultVal = {
  isShown: false,
  index: Number,
};

const Dashboard = () => {
  const [isShowCloseIcon, setIsShowCloseIcon] = useState<IState>();

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
    />
  );
};

export default Dashboard;
