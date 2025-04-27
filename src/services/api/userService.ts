import axios from "axios";

interface User {
  userId: number;
  email: string;
  phoneNumber: string;
}
interface RegisterData {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}
const apiUrl = import.meta.env.VITE_API_URL;

const createUser = async (formData: RegisterData): Promise<boolean> => {
  try {
    await axios.post(`${apiUrl}/users`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return false;
  }
};

const getUserById = async (userId: string) => {
  try {
    const response = await axios.get(`${apiUrl}/users/${userId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return null;
  }
};

const updateUser = async (
  userId: string,
  formData: Partial<User>,
): Promise<boolean> => {
  try {
    await axios.put(`${apiUrl}/users/${userId}`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    return true; // Indikasi sukses
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return false; // Indikasi gagal
  }
};

const deleteUser = async (userId: string) => {
  try {
    await axios.delete(`${apiUrl}/users/${userId}`);
    return;
  } catch (error) {
    console.error("Error:", error);
  }
};

export { getUserById, updateUser, deleteUser, createUser };
