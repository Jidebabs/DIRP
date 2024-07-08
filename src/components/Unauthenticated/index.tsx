import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Unautheticated/Auth/Login";
import Landing from "../../pages/Unautheticated/landing";
import Register from "../../pages/Unautheticated/Auth/Register";
import Success from "../../pages/Unautheticated/Auth/Success";
import Verify from "../../pages/Unautheticated/Auth/Verify";

const Unauthenticated = () => {
  return (
    <Routes>
      {/* Customer App */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<Register />} />
      <Route path="/success" element={<Success />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
};

export default Unauthenticated;
