import useIsLoginStore from "@/stores/loginStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  getUserById,
  updateUser,
  deleteUser,
} from "@/services/api/userService";

import { z } from "zod";
import useUserStore from "@/stores/userStore";

export const useProfile = () => {
  const { setIsLogin } = useIsLoginStore();
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const userSchema = z.object({
    name: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.string().email("Format email tidak valid"),
    phoneNumber: z.string().min(10, "Nomor HP minimal 10 digit"),
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const splitCountryCode = (phoneNumber: string) => {
    // Ensure phoneNumber is a valid string before calling match
    if (!phoneNumber) {
      return { countryCode: null, number: phoneNumber };
    }

    const match = phoneNumber.match(/^(\+\d{0,2})(\d+)$/);

    if (match) {
      return { countryCode: match[1], number: match[2] };
    }

    // Return null country code if no match is found
    return { countryCode: null, number: phoneNumber };
  };

  useEffect(() => {
    const getUser = async (userId: string) => {
      setLoading(true);
      const userData = await getUserById(userId);
      setFormData(userData);
      setLoading(false);
    };
    getUser(user[0].userId);
  }, []);

  const handleUpdate = async () => {
    try {
      await updateUser(user[0].userId, formData);
      setTimeout(() => {
        window.location.reload(); // Reload halaman setelah submit
      }, 500);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(user[0].userId);
      setTimeout(() => {
        setIsLogin(false);
        setUser([]);
        navigate("/login");
      }, 500);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = userSchema.safeParse(formData);
    if (!validationResult.success) {
      const formattedErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((err) => {
        if (err.path) formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
    } else {
      setErrors({});
      handleUpdate();
    }
  };

  return {
    loading,
    formData,
    handleChange,
    splitCountryCode,
    handleSubmit,
    handleDelete,
    errors,
  };
};
