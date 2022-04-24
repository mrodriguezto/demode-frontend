import { useFormik } from "formik";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import TextField from "../components/TextField";
import { AuthContext } from "../context/AuthContext";
import { AxiosErrorResponse } from "../types/dataTypes";

const LoginPage = () => {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: () => login(),
    });

  const login = async () => {
    try {
      await signin(values);
      navigate("/");
    } catch (error: any) {
      const err = error as AxiosErrorResponse;
      toast.error(err.response.data.error.message);
    }
  };

  return (
    <div className='text-white pt-[112px] min-h-full'>
      {/* TODO: Use the PageTitle Component */}
      <h1 className='my-6 text-center text-3xl'>Inicio de sesión</h1>
      <div className='min-h-full w-full flex justify-center'>
        {/* TODO: Make a component out of this div */}
        <Card>
          <form onSubmit={handleSubmit} noValidate>
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
              label='Contraseña'
              name='password'
              value={values.password}
              type='password'
              placeholder='Ingrese su contraseña...'
              required
            />
            <div className='w-full flex justify-center'>
              <Button className='mt-3 shadow-md px-9' type='submit' size='sm'>
                Ingresar
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
