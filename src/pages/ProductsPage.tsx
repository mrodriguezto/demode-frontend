import { useContext, useState } from "react";
import { Button } from "../components/Button";

import { PageTitle } from "../components/Title";
import { ProductCard } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { AuthContext } from "../context/AuthContext";
import { NewProductModal } from "../components/Modal";
import { useGetProductsQuery } from "../store/services";

const ProductsPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { status } = useContext(AuthContext);
  const { data: products = [], isLoading } = useGetProductsQuery();

  return (
    <div className='pt-36 relative'>
      <PageTitle title='Productos' />
      <div className='min-h-full container lg:max-w-5xl mx-auto px-0 sm:px-8 py-4'>
        {status === "authenticated" && (
          <div className='flex justify-end mb-8'>
            <Button onClick={() => setIsOpened(true)}>
              Añadir nuevo producto
            </Button>
          </div>
        )}
        {isLoading || status === "checking" ? (
          <div className='w-full flex items-center justify-center'>
            <Spinner size='lg' />
          </div>
        ) : products.length == 0 ? (
          <div className='text-center text-white'>
            Aún no hay publicaciones.
          </div>
        ) : (
          <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 '>
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                admin={status === "authenticated"}
              />
            ))}
          </div>
        )}
      </div>
      <NewProductModal isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </div>
  );
};

export default ProductsPage;
