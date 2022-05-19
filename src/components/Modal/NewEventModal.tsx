import { useFormik } from "formik";
import toast from "react-hot-toast";

import { Button } from "../Button";
import { Spinner } from "../Spinner";
import { Modal } from "./Modal";
import { TextArea, TextInput } from "../Input";
import { useAddEventMutation } from "../../store/services/events";

const initialValues = {
  title: "",
  description: "",
  place: "",
  starts_at: "",
  url: "",
};

type Props = {
  isOpened: boolean;
  onClose: () => void;
};

export const NewEventModal = ({ isOpened, onClose }: Props) => {
  const [addEvent, { isLoading }] = useAddEventMutation();

  const { values, handleChange, handleSubmit, setValues } = useFormik({
    initialValues,
    onSubmit: () => registerEvent(),
  });

  const registerEvent = () => {
    addEvent(values)
      .then((res) => {
        toast.success("Evento Registrado");
        setValues(initialValues);
      })
      .catch(() => toast.error("No se logró registrar el ítem"));
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
          label='Lugar'
          name='place'
          value={values.place}
          placeholder='Ingrese el lugar...'
          required
        />
        <TextInput
          onChange={handleChange}
          label='Fecha y hora'
          name='starts_at'
          value={values.starts_at}
          type='datetime-local'
          placeholder='Ingrese la fecha...'
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
