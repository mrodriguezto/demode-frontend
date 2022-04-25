import { useContext, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import { AuthContext } from "../context/AuthContext";
import useProducts from "../hooks/useProducts";
import { RiCloseFill } from "react-icons/ri";
import { useFormik } from "formik";
import demodeApi from "../api/axios";
import toast from "react-hot-toast";
import TextField from "../components/TextField";
import TextArea from "../components/TextArea/index";
import useUploadFile from "../hooks/useUploadFile";

const ProductsPage = () => {
  const { isLoading, products, addProduct } = useProducts();
  const [img, setImg] = useState<File>();
  const { status } = useContext(AuthContext);
  const { uploadFile } = useUploadFile("products");

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: "",
      description: "",
      categories: "",
      url: "",
    },
    onSubmit: () => uploadFiles(),
  });

  const uploadFiles = async () => {
    uploadFile(img, registerProduct);
  };

  const registerProduct = (url: string) => {
    demodeApi
      .post("/products/new", {
        title: values.title,
        description: values.description,
        categories: values.categories,
        url: values.url,
        img: url,
      })
      .then((res) => {
        toast.success("Producto registrado");
        addProduct(res.data);
      });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || !files[0]) return;
    setImg(files[0]);
  };

  return (
    <div className='pt-36 relative'>
      <PageTitle title='Productos' />
      {isLoading || status === "checking" ? (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      ) : products.length == 0 ? (
        <div className='text-center'>Aún no hay publicaciones.</div>
      ) : (
        <div className='min-h-full container lg:max-w-5xl mx-auto px-0 sm:px-8 py-4'>
          {status === "authenticated" && (
            <div className='flex justify-end mb-8'>
              <Button dataToggle='modal' dataTarget='#newProductModal'>
                Añadir nuevo producto
              </Button>
            </div>
          )}
          <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 '>
            {products.map((item) => (
              <ProductCard
                id={item._id}
                url={item.url}
                title={item.title}
                categories={item.categories}
                description={item.description}
                img={item.img}
                admin={status === "authenticated"}
              />
            ))}
          </div>
        </div>
      )}
      <>
        {/* Modal */}
        <div
          className='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
          id='newProductModal'
        >
          <div className='modal-dialog relative w-auto pointer-events-none'>
            <div className='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-dark bg-clip-padding rounded-sm outline-none text-current'>
              <div className='modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md'>
                <Button
                  type='button'
                  className='btn-close'
                  color='transparent'
                  dataDismiss='modal'
                >
                  <RiCloseFill className='w-6 h-6' />
                </Button>
              </div>

              {/* Modal Body */}
              <div className='modal-body relative p-6 text-white'>
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
                  <div className='w-full flex'>
                    <label className='block'>
                      <span className='sr-only'>Elegir una foto</span>
                      <input
                        onChange={handleImageChange}
                        type='file'
                        className='block w-full text-sm text-slate-500
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-sm file:border-0
                          file:text-sm file:font-semibold
                          file:bg-alterGray file:text-white
                          hover:file:bg-darkGray '
                      />
                    </label>
                  </div>
                  <div className='w-full flex justify-left'>
                    <Button
                      className='px-9 mt-3 shadow-md'
                      type='submit'
                      size='sm'
                    >
                      Agregar
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductsPage;
