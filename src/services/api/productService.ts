import axios from "axios";

// interface prducts {
//   id: number | null;
//   title: string;
//   description: string;
//   price: number | null;
//   courseImage: string;
//   tutorName: string;
//   tutorImage: string;
//   tutorPosition: string;
//   tutorCompany: string;
//   rating: number | null;
//   reviewCount: number | null;
// }
const apiUrl = import.meta.env.VITE_API_URL;

const getProducts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products`);
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

export { getProducts };
