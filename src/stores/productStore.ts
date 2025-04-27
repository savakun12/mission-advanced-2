import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number | null;
  title: string;
  description: string;
  price: number | null;
  courseImage: string;
  tutorName: string;
  tutorImage: string;
  tutorPosition: string;
  tutorCompany: string;
  rating: number | null;
  reviewCount: number | null;
}

interface ProductsState {
  products: Product[]; // Change to an array of products
  setProducts: (value: Product[]) => void; // Accept an array of products
}

const useProductStore = create<ProductsState>()(
  persist(
    (set) => ({
      products: [], // Initialize as an empty array
      setProducts: (value) => set({ products: value }),
    }),
    {
      name: "productsStore", // Persisted store name
    },
  ),
);

export default useProductStore;
