import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Unautheticated/Auth/Login";
import Landing from "../../pages/Unautheticated/landing";

const Unauthenticated = () => {
  return (
    <Routes>
      {/* Customer App */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Unauthenticated;
