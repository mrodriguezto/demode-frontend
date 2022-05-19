import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import demodeApi from "../api/axios";
import { PreviewData } from "../types/dataTypes";

const usePreviewData = () => {
  const [previewData, setPreviewData] = useState<PreviewData>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPreviewData();
  }, []);

  const loadPreviewData = async () => {
    try {
      const res = await demodeApi.get<PreviewData>("/preview");
      setIsLoading(false);
      setPreviewData(res.data);
    } catch (error) {
      toast.error("No se lograron obtener los datos");
    }
  };

  return {
    previewData,
    isLoading,
  };
};

export default usePreviewData;
