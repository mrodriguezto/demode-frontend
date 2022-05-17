import { useState } from "react";
import { useFormik } from "formik";

import demodeApi from "../../api/axios";
import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { Modal } from "./Modal";
import { TextInput, TextArea } from "../Input";
import { Product } from "../../types/dataTypes";
import { useAppDispatch } from "../../store/hooks";
import { updateProduct } from "../../store/slices/products";

type Props = {
  isOpened: boolean;
  onClose: () => void;
  product: Product;
};

export const EditProductModal = ({ product, isOpened, onClose }: Props) => {
  const [isSending, setIsSending] = useState(false);
  const dispatch = useAppDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: product.title,
      description: product.description,
      categories: product.categories,
      url: product.url,
    },
    onSubmit: () => editProduct(),
  });

  const editProduct = () => {
    setIsSending(true);
    demodeApi.put(`/products/${product._id}/edit`, values).then((res) => {
      dispatch(updateProduct(res.data));
      setIsSending(false);
      onClose();
    });
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
          label='Descripción'
          name='description'
          value={values.description}
          placeholder='Ingrese la descripción...'
          required
        />
        <TextInput
          onChange={handleChange}
          label='Categoría'
          name='categories'
          value={values.categories}
          placeholder='Ingrese la categoría...'
          required
        />
        <TextInput
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
