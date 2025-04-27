import { useState, useEffect } from "react";
import { getProducts } from "@/services/api/productService";
import useProductStore from "@/stores/productStore";

export const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { products, setProducts } = useProductStore();

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProducts();
      setProducts(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { products, loading, error };
};
