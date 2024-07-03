import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Authenticated from "./components/Authenticated";
import Unauthenticated from "./components/Unauthenticated";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("_ship_n_logic") ?? "";

  if (token && location.pathname === "/sign-in") {
    navigate("/");
  }

  return (
    <MantineProvider
      theme={{
        primaryColor: "blue",
        fontFamily: "Montserrat, sans-serif",
        defaultRadius: 8,
      }}
    >
      <Notifications position="top-right" />
      <Routes>
        <Route
          path="/*"
          element={token ? <Authenticated /> : <Unauthenticated />}
        />
      </Routes>
    </MantineProvider>
  );
}
