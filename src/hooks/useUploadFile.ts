import {
  getDownloadURL,
  ref,
  StorageError,
  uploadBytesResumable,
} from "firebase/storage";
import { useReducer, useState } from "react";
import { storage } from "../api/firebase";
import { uploadsReducer, UploadsState } from "./uploadsReducer";
import toast from "react-hot-toast";

const initialState: UploadsState = {
  fileStatus: "idle",
  error: null,
  url: null,
};

const useUploadFile = (folder: string) => {
  const [progress, setProgress] = useState(0);
  const [state, dispatch] = useReducer(uploadsReducer, initialState);

  const uploadFile = (
    file: File | undefined,
    callback: (url: string) => void
  ): string | void => {
    if (!file) return;
    dispatch({ type: "uploading" });

    const storageRef = ref(storage, `/${folder}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err: StorageError) => {
        dispatch({ type: "error", payload: { error: err.message } });
        toast.error(`No se logró subir la imagen. ${err.message}`);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          dispatch({ type: "success", payload: { url } });
          callback(url);
        });
      }
    );
  };

  return {
    error: state.error,
    fileStatus: state.fileStatus,
    progress,
    uploadFile,
  };
};

export default useUploadFile;
