import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import useIsLoginStore from "./stores/loginStore";

import { StateResetHandler } from "./components/stateResetHandler";

// Lazy load untuk memuat halaman hanya saat dibutuhkan
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));

// Komponen Loading (Fallback)
const Loading = () => <div className="p-4 text-center">Loading...</div>;

export default function App() {
  const { isLogin } = useIsLoginStore();

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <StateResetHandler />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="login"
            element={isLogin ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="register"
            element={isLogin ? <Navigate to="/" replace /> : <Register />}
          />
          <Route
            path="profile"
            element={!isLogin ? <Navigate to="/" replace /> : <Profile />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
