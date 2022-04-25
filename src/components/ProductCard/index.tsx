import Button from "../Button";
import Card from "../Card";
import { RiMore2Fill } from "react-icons/ri";
import { useState } from "react";
import CardMenu from "../CardMenu";
import demodeApi from "../../api/axios";
import toast from "react-hot-toast";

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  img: string;
  url: string;
  categories: string;
  admin: boolean;
};

const ProductCard = ({
  id,
  categories,
  description,
  img,
  title,
  url,
  admin = false,
}: ProductCardProps) => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleDelete = async () => {
    try {
      const res = await demodeApi.delete(`/products/${id}/delete`);
      window.location.reload();
    } catch (error) {
      toast.error("No se logró eliminar el item");
    }
  };

  const handleEdit = () => {};

  return (
    <Card className='flex flex-col min-h-[320px]' fullsize noPadding>
      <div className='relative'>
        <img src={img} alt={title} className='max-h-44 w-full object-cover' />
        {admin && (
          <>
            <Button
              size='sm'
              color='dark'
              className='px-3 absolute right-0 top-0 opacity-40'
              onClick={() => setMenuIsActive((value) => !value)}
            >
              <RiMore2Fill className='w-6 h-6' />
            </Button>
            {menuIsActive && (
              <CardMenu onDelete={handleDelete} onEdit={() => {}}></CardMenu>
            )}
          </>
        )}
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
