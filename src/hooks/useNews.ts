import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { Post } from "../types/dataTypes";
const useNews = () => {
  const [news, setNews] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const res = await demodeApi.get<Post[]>("/posts");
      setIsLoading(false);
      setNews(res.data);
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  return {
    news,
    isLoading,
  };
};

export default useNews;
