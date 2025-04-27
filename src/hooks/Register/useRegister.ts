import { createUser } from "@/services/api/userService";
import { useState } from "react";
import { useNavigate } from "react-router";
import { z } from "zod";

export function useRegister() {
  const navigate = useNavigate();

  const registerSchema = z
    .object({
      name: z.string().min(3, "Nama minimal 3 karakter"),
      email: z.string().email("Format email tidak valid"),
      phoneNumber: z.string().min(10, "Nomor HP minimal 10 digit"),
      password: z.string().min(6, "Password minimal 6 karakter"),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Konfirmasi password tidak cocok",
      path: ["confirmPassword"],
    });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [message, setMessage] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlePhoneChange = (phone: string) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: phone,
    }));
  };

  const fetchRegister = async () => {
    try {
      await createUser(formData);
      setMessage("Register berhasil! Mengalihkan ke login...");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = registerSchema.safeParse(formData);
    if (!validationResult.success) {
      const formattedErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path) formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
    } else {
      setErrors({});
      fetchRegister();
    }
  };

  return {
    message,
    formData,
    handleChange,
    handlePhoneChange,
    handleSubmit,
    errors,
  };
}
