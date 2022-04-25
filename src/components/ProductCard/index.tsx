import Button from "../Button";
import Card from "../Card";

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

export default ProductCard;
