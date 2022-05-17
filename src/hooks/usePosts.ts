import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { Post } from "../types/dataTypes";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { initializePosts } from "../store/slices/posts";

const usePosts = () => {
  const posts = useAppSelector((state) => state.posts.value);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const res = await demodeApi.get<Post[]>("/posts");
      setIsLoading(false);
      dispatch(initializePosts(res.data));
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  return {
    posts,
    isLoading,
  };
};

export default usePosts;
