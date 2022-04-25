import Button from "../components/Button";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";
import useProducts from "../hooks/useProducts";

const ProductsPage = () => {
  const { isLoading, products } = useProducts();

  return (
    <div className='pt-36'>
      <PageTitle title='Productos' />
      {isLoading ? (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      ) : products.length == 0 ? (
        <div className='text-center'>Aún no hay publicaciones.</div>
      ) : (
        <div className='min-h-full grid md:grid-cols-2 gap-x-8 gap-y-4 container lg:max-w-5xl mx-auto px-0 sm:px-8 py-6'>
          {products.map((item) => (
            <ProductCard
              url={item.url}
              title={item.title}
              categories={item.categories}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
