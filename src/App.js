import { Routes, Route } from "react-router-dom";

import MainPage from "./app/pages/main-page";
import LogInPage from "./app/pages/logIn-page";

import RequireAuth from "./app/hoc/require-auth";

import "./global.scss";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route
          path="/main"
          element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}
