import { useState } from "react";
import toast from "react-hot-toast";
import {
  getDownloadURL,
  ref,
  StorageError,
  uploadBytes,
} from "firebase/storage";

import { storage } from "../api/firebase";

/**
 * @param {string} path Folder path where the uploaded files will be saved
 */
const useStorage = (path: string) => {
  const [isUploading, setIsUploading] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const uploadFile = async (file: File): Promise<string> => {
    setIsUploading(true);

    const storageRef = ref(storage, `/${path}/${file.name}`);

    return new Promise<string>((resolve, reject) => {
      uploadBytes(storageRef, file)
        .then((uploadTask) => {
          getDownloadURL(uploadTask.ref).then((url) => {
            resolve(url);
          });
        })
        .catch((err: StorageError) => {
          reject(new Error(err.message));
        })
        .finally(() => {
          setIsUploading(false);
        });
    });
  };

  /**
   * @param  {File|undefined} file File to upload
   * @param  {()=>void} onFileError Executes when there is no file to upload
   * @param  {(error:any)=>void} onUploadError Executes when theres an error on uploading
   * @param  {(url:string)=>void} onSuccess Executes on success
   */
  const registerData = async (
    file: File | undefined,
    onFileError: () => void,
    onUploadError: (error: any) => void,
    onSuccess: (url: string) => void
  ) => {
    if (!file) {
      onFileError();
      return;
    }

    setIsSending(true);

    try {
      const url = await uploadFile(file);
      onSuccess(url);
    } catch (error: any) {
      onUploadError(error);
    } finally {
      setIsSending(false);
    }
  };

  return {
    isUploading,
    isSending,
    uploadFile,
    registerData,
  };
};

export default useStorage;
