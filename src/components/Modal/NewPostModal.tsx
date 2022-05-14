import { useState } from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";

import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { Modal } from "./Modal";
import { TextArea, TextInput } from "../Input";
import demodeApi from "../../api/axios";
import useStorage from "../../hooks/useStorage";

const initialValues = {
  title: "",
  content: "",
};

type Props = {
  callback: (data: any) => void;
  isOpened: boolean;
  onClose: () => void;
};

export const NewPostModal = ({ callback, isOpened, onClose }: Props) => {
  const { registerData, isSending } = useStorage("posts");
  const [img, setImg] = useState<File>();

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    onSubmit: () =>
      registerData(
        img,
        () => toast.error("Se debe adjuntar una imagen"),
        (error) => toast.error("Ocurrió un error: ", error),
        (url) => newPost(url)
      ),
  });

  const newPost = (url: string) => {
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
        callback(res.data);
      });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !files[0]) return;
    setImg(files[0]);
  };

  return (
    <Modal isOpened={isOpened} onClose={onClose}>
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
              className='block w-full text-sm text-gray-400
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-sm file:border-0
                    file:text-sm file:font-semibold
                    file:bg-darkGray file:text-white
                    file:hover:cursor-pointer
                    hover:file:bg-darkGray'
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
