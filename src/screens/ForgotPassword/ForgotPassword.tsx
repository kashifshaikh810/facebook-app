import { useNavigate } from "react-router-dom";
import ForgotPasswordMarkup from "./ForgotPasswordMarkup";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return <ForgotPasswordMarkup navigate={navigate} />;
};

export default ForgotPassword;
