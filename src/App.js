import { Routes, Route } from "react-router-dom";

import MainPage from "./app/pages/main-page";
import LogInPage from "./app/pages/logIn-page";

import "./global.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </>
  );
}
