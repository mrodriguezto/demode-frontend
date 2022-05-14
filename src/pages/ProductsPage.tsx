import { useContext, useState } from "react";
import { Button } from "../components/Button";

import { PageTitle } from "../components/Title";
import { ProductCard } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { AuthContext } from "../context/AuthContext";
import { NewProductModal } from "../components/Modal";
import useProducts from "../hooks/useProducts";

const ProductsPage = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { isLoading, products } = useProducts();
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
              <Button onClick={() => setIsOpened(true)}>
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
      <NewProductModal isOpened={isOpened} onClose={() => setIsOpened(false)} />
    </div>
  );
};

export default ProductsPage;
