import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { Post } from "../types/dataTypes";
const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const res = await demodeApi.get<Post[]>("/posts");
      setIsLoading(false);
      setPosts(res.data);
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  const addPosts = (data: Post) => {
    setPosts((values) => [...values, data]);
  };

  return {
    posts,
    isLoading,
    addPosts,
  };
};

export default usePosts;
