import { Routes, Route } from "react-router-dom";

import MainPage from "./app/pages/main-page";
import LogInPage from "./app/pages/logIn-page";

import RequireAuth from "./app/hoc/require-auth";
import { AuthProvider } from "./app/hoc/auth-provider";

import "./global.scss";

export default function App() {
  return (
    <>
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}
