import { useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";

import useUploadFile from "../../hooks/useUploadFile";
import demodeApi from "../../api/axios";
import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { Modal } from "./Modal";
import { TextArea, TextInput } from "../Input";

const initialValues = {
  title: "",
  content: "",
};

type Props = {
  callback: (data: any) => void;
};

export const NewNewsModal = ({ callback }: Props) => {
  const { uploadFile } = useUploadFile("news");
  const [isSending, setIsSending] = useState(false);
  const [img, setImg] = useState<File>();

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    onSubmit: () => uploadFiles(),
  });

  const uploadFiles = async () => {
    setIsSending(true);
    uploadFile(img, registerProduct);
  };

  const registerProduct = (url: string) => {
    demodeApi
      .post("/posts/new", {
        title: values.title,
        content: values.content,
        img: url,
      })
      .then((res) => {
        toast.success("Artículo registrado");

        setValues(initialValues);
        setImg(undefined);
        setIsSending(false);
        callback(res.data);
      });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !files[0]) return;
    setImg(files[0]);
  };

  return (
    <Modal modalId='newNewsModal'>
      <h6 className='font-semibold text-xl'>NUEVO ARTÍCULO</h6>
      <br />
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          onChange={handleChange}
          label='Título'
          name='title'
          value={values.title}
          placeholder='Ingrese el título...'
          required
        />
        <TextArea
          onChange={handleChange}
          label='Contenido'
          name='content'
          value={values.content}
          placeholder='Ingrese el contenido...'
          required
        />

        <div className='w-full flex'>
          <label className='block'>
            <span className='sr-only'>Elegir una foto</span>
            <input
              onChange={handleImageChange}
              type='file'
              className='block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-sm file:border-0
                    file:text-sm file:font-semibold
                    file:bg-alterGray file:text-white
                    hover:file:bg-darkGray '
            />
          </label>
        </div>
        <div className='w-full flex justify-left'>
          <Button
            className='px-9 mt-3 shadow-md relative'
            type='submit'
            size='sm'
            disabled={isSending}
          >
            {isSending ? (
              <div className='w-full h-full flex gap-x-2'>
                <Spinner size='inline' color='lightGray' />

                <p>Enviando...</p>
              </div>
            ) : (
              "Enviar"
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
