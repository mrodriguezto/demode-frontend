import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { Product } from "../types/dataTypes";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { initializeProducts } from "../store/slices/products";

const useProducts = () => {
  const products = useAppSelector((state) => state.products.value);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await demodeApi.get<Product[]>("/products");
      setIsLoading(false);
      dispatch(initializeProducts(res.data));
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
