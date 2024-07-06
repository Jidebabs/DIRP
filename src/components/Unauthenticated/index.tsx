import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Unautheticated/Auth/Login";
import Landing from "../../pages/Unautheticated/landing";
import Register from "../../pages/Unautheticated/Auth/Register";

const Unauthenticated = () => {
  return (
    <Routes>
      {/* Customer App */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<Register />} />
    </Routes>
  );
};

export default Unauthenticated;
