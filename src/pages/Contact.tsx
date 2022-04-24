import PageTitle from '../components/PageTitle';
import { useFormik } from "formik";
import Button from "../components/Button";
import Card from "../components/Card";
import TextField from "../components/TextField";


const Contact = () => {
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        onSubmit: () => contact(),
    });

    const contact = () => {};


  return(
    <div className='text-white pt-[112px] min-h-full'>
        {   /*TODO  Revisar Login page*/                              }
        <PageTitle title='Contáctanos'/>
        <br></br>
        <div className='min-h-full w-full flex justify-center'>
            {/*TODO Revisar Login page*/}
            <Card>
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
                    <TextField
                        onChange={handleChange}
                        label='Mensaje'
                        name='message'
                        value={values.message}
                        type='message'
                        placeholder='Ingrese su mensaje...'
                        required
                    />
                    <div className='w-full flex justify-left'>
                        <Button className='px-9 mt-3 shadow-md' type='submit' size='sm'>
                            Enviar
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    </div>
  );
};

export default Contact;