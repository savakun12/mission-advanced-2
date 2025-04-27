import { useState } from "react";
import { useNavigate } from "react-router";
import { authService } from "@/services/authService";

export function useLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await authService({
      email,
      password,
    });
    if (response === "Login berhasil") {
      setMessage("Login berhasil! Mengalihkan ke halaman utama...");
      navigate("/");
    } else {
      setError(response);
    }
  };

  return {
    message,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
  };
}
