import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Unautheticated/Auth/Login";
import Landing from "../../pages/Unautheticated/landing";
import Register from "../../pages/Unautheticated/Auth/Register";
import Success from "../../pages/Unautheticated/Auth/Success";
import Verify from "../../pages/Unautheticated/Auth/Verify";
import ForgotPassword from "../../pages/Unautheticated/Auth/ForgotPassword";
import ResetPassword from "../../pages/Unautheticated/Auth/ResetPassword";
import PasswordSuccess from "../../pages/Unautheticated/Auth/passwordSuccess";

const Unauthenticated = () => {
  return (
    <Routes>
      {/* Customer App */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<Register />} />
      <Route path="/success" element={<Success />} />
      <Route path="/pasword-success" element={<PasswordSuccess />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export default Unauthenticated;
