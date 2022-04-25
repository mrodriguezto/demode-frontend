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

type Props = {
  callback: (data: any) => void;
  id: string;
  initialValues: {
    title: string;
    description: string;
    categories: string;
    url: string;
  };
};

const EditProductModal = ({ callback, id, initialValues }: Props) => {
  const [isSending, setIsSending] = useState(false);

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    onSubmit: () => updateProduct(),
  });

  const updateProduct = () => {
    setIsSending(true);
    demodeApi
      .put(`/products/${id}/edit`, {
        title: values.title,
        description: values.description,
        categories: values.categories,
        url: values.url,
      })
      .then((res) => {
        window.location.reload();

        setValues(initialValues);
        setIsSending(false);
        callback(res.data);
      });
  };

  return (
    <Modal modalId={`editProductModal${id}`}>
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
        <div className='w-full flex justify-left'>
          <Button
            className='px-9 mt-3 shadow-md relative'
            type='submit'
            size='sm'
            disabled={isSending}
          >
            {isSending ? (
              <div className='w-full h-full flex gap-x-2'>
                <Spinner
                  color='lightGray'
                  size='sm'
                  className='w-3 h-3 inline'
                />
                <p>Actualizando...</p>
              </div>
            ) : (
              "Actualizar"
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProductModal;
