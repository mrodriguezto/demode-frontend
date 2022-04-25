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
  place: "",
  starts_at: "",
  url: "",
};

type Props = {
  callback: (data: any) => void;
};

const NewEventModal = ({ callback }: Props) => {
  const [isSending, setIsSending] = useState(false);

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    onSubmit: () => registerEvent(),
  });

  const registerEvent = () => {
    setIsSending(true);
    demodeApi
      .post("/events/new", {
        title: values.title,
        description: values.description,
        place: values.place,
        starts_at: values.starts_at,
        url: values.url,
      })
      .then((res) => {
        toast.success("Producto registrado");

        setValues(initialValues);

        setIsSending(false);
        callback(res.data);
      });
  };

  return (
    <Modal modalId='newEventModal'>
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
          label='Lugar'
          name='place'
          value={values.place}
          placeholder='Ingrese el lugar...'
          required
        />
        <TextField
          onChange={handleChange}
          label='Fecha y hora'
          name='starts_at'
          value={values.starts_at}
          type='datetime-local'
          placeholder='Ingrese la fecha...'
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
                <Spinner size='inline' color='lightGray' />

                <p>Agregando...</p>
              </div>
            ) : (
              "Agregar"
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default NewEventModal;
