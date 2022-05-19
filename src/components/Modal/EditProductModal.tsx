import { useFormik } from "formik";
import toast from "react-hot-toast";

import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { Modal } from "./Modal";
import { TextInput, TextArea } from "../Input";
import { Product } from "../../types/dataTypes";
import { useUpdateProductMutation } from "../../store/services";

type Props = {
  isOpened: boolean;
  onClose: () => void;
  product: Product;
};

export const EditProductModal = ({ product, isOpened, onClose }: Props) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();

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
    updateProduct({ id: product._id, body: values })
      .then(() => {
        toast.success("Producto actualizado");
        onClose();
      })
      .catch(() => toast.error("No se logró actualizar el producto"));
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
            disabled={isLoading}
          >
            {isLoading ? (
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
