import { useContext } from "react";
import Button from "../components/Button";

import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import { AuthContext } from "../context/AuthContext";
import useProducts from "../hooks/useProducts";
import NewProductModal from "../components/Modal/NewProductModal";

const ProductsPage = () => {
  const { isLoading, products, addProduct } = useProducts();
  const { status } = useContext(AuthContext);

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
      <NewProductModal callback={addProduct} />
    </div>
  );
};

export default ProductsPage;
