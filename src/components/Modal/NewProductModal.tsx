import Modal from "./index";
import useUploadFile from "../../hooks/useUploadFile";
import { useState } from "react";
import { useFormik } from "formik";
import demodeApi from "../../api/axios";
import toast from "react-hot-toast";
import TextField from "../TextField";
import TextArea from "../TextArea";
import Button from "../Button";
import Spinner from "../Spinner";

const initialValues = {
  title: "",
  description: "",
  categories: "",
  url: "",
};

type Props = {
  callback: (data: any) => void;
};

const NewProductModal = ({ callback }: Props) => {
  const { uploadFile } = useUploadFile("products");
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
      .post("/products/new", {
        title: values.title,
        description: values.description,
        categories: values.categories,
        url: values.url,
        img: url,
      })
      .then((res) => {
        toast.success("Producto registrado");

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
    <Modal modalId='newProductModal'>
      <h6 className='font-semibold text-xl'>NUEVO ARTÍCULO</h6>
      <br />
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          onChange={handleChange}
          label='Título'
          name='title'
          value={values.title}
          placeholder='Ingrese el título...'
          required
        />
        <TextArea
          onChange={handleChange}
          label='Descripción'
          name='description'
          value={values.description}
          placeholder='Ingrese la descripción...'
          required
        />
        <TextField
          onChange={handleChange}
          label='Categoría'
          name='categories'
          value={values.categories}
          placeholder='Ingrese la categoría...'
          required
        />
        <TextField
          onChange={handleChange}
          label='Enlace'
          name='url'
          value={values.url}
          placeholder='Ingrese el enlace...'
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

export default NewProductModal;
