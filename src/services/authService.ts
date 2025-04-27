import useIsLoginStore from "@/stores/loginStore";
import useUserStore from "@/stores/userStore";

interface User {
  id: string;
  email: string;
  password: string;
  phoneNumber: string;
  avatar: string;
}

const authService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<string> => {
  const { setIsLogin } = useIsLoginStore.getState();
  const { setUser } = useUserStore.getState();

  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: User[] = await response.json();
    const result = data.find((user) => user.email === email);

    if (!result) {
      return "Email tidak ditemukan";
    }

    if (result.password !== password) {
      return "Password salah";
    }
    console.log(result);
    const userData = [
      {
        userId: result.id,
        email: result.email,
        phoneNumber: result.phoneNumber,
        avatar: result.avatar,
      },
    ];
    console.log(userData);
    setIsLogin(true);
    setUser(userData);
    return "Login berhasil";
  } catch (error) {
    console.error("Error:", error);
    return "Terjadi kesalahan saat login";
  }
};

export { authService };
