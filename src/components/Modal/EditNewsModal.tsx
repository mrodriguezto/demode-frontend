import Modal from "./index";
import { useState } from "react";
import { useFormik } from "formik";
import demodeApi from "../../api/axios";
import TextField from "../TextField";
import TextArea from "../TextArea";
import Button from "../Button";
import Spinner from "../Spinner";

type Props = {
  callback: (data: any) => void;
  id: string;
  initialValues: {
    title: string;
    content: string;
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
      .put(`/posts/${id}/edit`, {
        title: values.title,
        content: values.content,
      })
      .then((res) => {
        window.location.reload();

        setValues(initialValues);
        setIsSending(false);
        callback(res.data);
      });
  };

  return (
    <Modal modalId={`editNewsModal${id}`}>
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
          label='Contenido'
          name='content'
          value={values.content}
          placeholder='Ingrese el contenido...'
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
                <Spinner size='inline' color='lightGray' />

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
