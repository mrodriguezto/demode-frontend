import { useState } from "react";
import toast from "react-hot-toast";
import {
  deleteObject,
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
  const [isDeleting, setIsDeleting] = useState(false);

  /**
   * @param  {File} file File to be uploaded
   * @returns {Promise}
   */
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
   * @param  {string} url Url of the file to be deleted
   * @returns {Promise}
   */
  const deleteFile = async (url: string): Promise<void> => {
    setIsDeleting(true);
    const fileRef = ref(storage, url);
    // const fileRef = ref(storage, `/${path}/${url.split("/")[-1]}`)
    return new Promise<void>((resolve, reject) => {
      deleteObject(fileRef)
        .then(() => resolve())
        .catch((error: StorageError) => {
          reject(new Error(error.message));
        })
        .finally(() => setIsDeleting(false));
    });
  };

  /**
   * @param  {File|undefined} file File to be uploaded
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
    isDeleting,
    uploadFile,
    registerData,
    deleteFile,
  };
};

export default useStorage;
