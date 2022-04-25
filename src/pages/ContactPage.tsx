import PageTitle from "../components/PageTitle";
import { useFormik } from "formik";
import Button from "../components/Button";
import Card from "../components/Card";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea";
import SocialMedia from "../components/SocialMedia";
import demodeApi from "../api/axios";
import { AxiosErrorResponse, ContactResponse } from "../types/dataTypes";
import { useState } from "react";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const {
    values,
    handleChange,
    handleSubmit,
    setValues,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues,
    onSubmit: () => contact(),
  });

  const contact = async () => {
    setIsSending(true);
    try {
      await demodeApi.post<ContactResponse>("/contact/new", values);
      setIsSending(false);
      toast.success("Mensaje enviado");
      setValues(initialValues);
    } catch (error) {
      const err = error as AxiosErrorResponse;
      toast.error(err.response.data.error.message);
    }
  };

  return (
    <div className='text-white min-h-full pt-36'>
      {/*TODO  Revisar Login page*/}
      <PageTitle title='CONTÁCTANOS' />
      <div className='min-h-full w-full flex flex-col gap-10 md:flex-row justify-center items-center mx-auto md:max-w-2xl lg:max-w-5xl container'>
        {/*TODO Revisar Login page*/}
        <Card fullsize>
          <h6 className='font-semibold text-xl'>DÉJANOS UN MENSAJE</h6>
          <br />
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              onChange={handleChange}
              label='Nombre'
              name='name'
              value={values.name}
              type='name'
              placeholder='Ingrese su nombre...'
              required
            />
            <TextField
              onChange={handleChange}
              label='Correo'
              name='email'
              value={values.email}
              type='email'
              placeholder='Ingrese su correo...'
              required
            />
            <TextArea
              onChange={handleChange}
              label='Mensaje'
              name='message'
              value={values.message}
              type='message'
              placeholder='Ingrese su mensaje...'
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
                    <p>Enviando...</p>
                  </div>
                ) : (
                  "Enviar"
                )}
              </Button>
            </div>
          </form>
        </Card>
        <div className='py-8 px-8 bg-darkGray w-full md:w-auto'>
          <SocialMedia title='Contáctanos por nuestras redes' responsive />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Contact;
