import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { Product } from "../types/dataTypes";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const res = await demodeApi.get<Product[]>("/products");
      setIsLoading(false);
      setProducts(res.data);
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  return {
    products,
    isLoading,
  };
};

export default useProducts;
