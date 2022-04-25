import Button from "../components/Button";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
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

type ProductCardProps = {
  title: string;
  description: string;
  img: string;
  url: string;
  categories: string;
};

const ProductCard = ({
  categories,
  description,
  img,
  title,
  url,
}: ProductCardProps) => {
  return (
    <Card className='flex flex-col min-h-[320px]' fullsize noPadding>
      <div>
        <img src={img} alt={title} className='max-h-44 w-full object-cover' />
      </div>
      <div className='px-6 py-4 text-center flex-1'>
        <h3 className='text-white text-xl font-title font-semibold uppercase'>
          {title}
        </h3>
        <small className='text-gray-400 text-sm font-body'>{categories}</small>
        <p className='text-gray-200 font-body'>{description}</p>
        <a href={url} target='_blank'>
          <Button
            color='primary'
            size='sm'
            className='text-white px-8 shadow-md mt-4'
          >
            Ver el artículo
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default ProductsPage;
