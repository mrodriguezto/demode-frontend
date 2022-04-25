import PageTitle from '../components/PageTitle';
import { useFormik } from "formik";
import Button from "../components/Button";
import Card from "../components/Card";
import TextField from "../components/TextField";
import TextFieldBig from "../components/TextFieldBig";
import SocialLinks from "../components/SocialLinks";

const Modals = () => {
    const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
      useFormik({
          initialValues: {
              title: "",
              description: "",
              category: "",
              url: "",

              date:"",
              address:"",
          },
          onSubmit: () => contact(),
      });
  
      const contact = () => {};
  
  
    return(
      <div className='text-white min-h-full'>


          {   /*NUEVO ARTíCULO*/  }

          <div></div>
          <br></br>
          <div className='min-h-full w-full flex justify-center'>
              {/*TODO Revisar Login page*/}
              <Card>
                  <h6 className='font-semibold text-xl'>
                    NUEVO ARTÍCULO
                  </h6><br />
                  <form onSubmit={handleSubmit} noValidate>
                      <TextField
                          onChange={handleChange}
                          label='Título'
                          name='title'
                          value={values.title}
                          type='title'
                          placeholder='Ingrese el título...'
                          required
                      />
                      <TextFieldBig
                          onChange={handleChange}
                          label='Descripción'
                          name='description'
                          value={values.description}
                          type='description'
                          placeholder='Ingrese la descripción...'
                          required
                      />
                      <TextField
                          onChange={handleChange}
                          label='Categoría'
                          name='category'
                          value={values.category}
                          type='category'
                          placeholder='Ingrese la categoría...'
                          required
                      />
                      <TextField
                          onChange={handleChange}
                          label='Enlace'
                          name='url'
                          value={values.url}
                          type='url'
                          placeholder='Ingrese el enlace...'
                          required
                      />
                      <div className='w-full flex justify-left'>
                          <Button className='px-9 mt-3 shadow-md' type='submit' size='sm' color='black'>
                              Subir imagen
                          </Button>
                      </div>
                      <div className='w-full flex justify-left'>
                          <Button className='px-9 mt-3 shadow-md' type='submit' size='sm'>
                              Agregar
                          </Button>
                      </div>
                  </form>
              </Card>
          </div>
          



          {   /*NUEVO CONCIERTO*/  }

          <div></div>
          <br></br>
          <div className='min-h-full w-full flex justify-center'>
              {/*TODO Revisar Login page*/}
              <Card>
                  <h6 className='font-semibold text-xl'>
                    NUEVO CONCIERTO
                  </h6><br />
                  <form onSubmit={handleSubmit} noValidate>
                      <TextField
                          onChange={handleChange}
                          label='Fecha'
                          name='date'
                          value={values.date}
                          type='date'
                          placeholder='Ingrese la fecha...'
                          required
                      />
                      <TextField
                          onChange={handleChange}
                          label='Dirección'
                          name='address'
                          value={values.address}
                          type='address'
                          placeholder='Ingrese la dirección...'
                          required
                      />
                      <TextFieldBig
                          onChange={handleChange}
                          label='Descripción'
                          name='description'
                          value={values.description}
                          type='description'
                          placeholder='Ingrese la descripción...'
                          required
                      />
                      <div className='w-full flex justify-left'>
                          <Button className='px-9 mt-3 shadow-md' type='submit' size='sm'>
                              Agregar
                          </Button>
                      </div>
                  </form>
              </Card>
          </div>
          <br />



          {   /*NUEVA NOTICIA*/  }

          <div></div>
          <br></br>
          <div className='min-h-full w-full flex justify-center'>
              {/*TODO Revisar Login page*/}
              <Card>
                  <h6 className='font-semibold text-xl'>
                    NUEVA NOTICIA
                  </h6><br />
                  <form onSubmit={handleSubmit} noValidate>
                      <TextField
                          onChange={handleChange}
                          label='Título'
                          name='title'
                          value={values.title}
                          type='title'
                          placeholder='Ingrese el título...'
                          required
                      />
                      <TextFieldBig
                          onChange={handleChange}
                          label='Noticia'
                          name='description'
                          value={values.description}
                          type='description'
                          placeholder='Ingrese la noticia...'
                          required
                      />
                      <div className='w-full flex justify-left'>
                          <Button className='px-9 mt-3 shadow-md' type='submit' size='sm' color='black'>
                              Subir imagen
                          </Button>
                      </div>
                      <div className='w-full flex justify-left'>
                          <Button className='px-9 mt-3 shadow-md' type='submit' size='sm'>
                              Agregar
                          </Button>
                      </div>
                  </form>
              </Card>
          </div>
          <br />



      </div>
    );
  };
  
  export default Modals;