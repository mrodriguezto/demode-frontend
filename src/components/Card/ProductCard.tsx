import { useState } from "react";
import { RiMore2Fill } from "react-icons/ri";
import toast from "react-hot-toast";

import { Card } from "./Card";
import { Button } from "../Button";
import { CardMenu } from "./CardMenu";
import { EditProductModal } from "../Modal";
import { Product } from "../../types/dataTypes";
import { useDeleteProductMutation } from "../../store/services";

type ProductCardProps = {
  product: Product;
  admin?: boolean;
};

export const ProductCard = ({ product, admin = false }: ProductCardProps) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    deleteProduct(product._id)
      .then(() => toast.success("Producto eliminado"))
      .catch(() => toast.error("No se logró eliminar el producto"));
  };

  return (
    <Card className='flex flex-col min-h-[320px]' fullsize noPadding>
      <div className='relative'>
        <img
          src={product.img}
          alt={product.title}
          className='max-h-44 w-full object-cover'
        />
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
              <CardMenu
                onDelete={handleDelete}
                isOpened={menuIsActive}
                handleClose={() => setMenuIsActive(false)}
                onEdit={() => setIsOpened(true)}
              />
            )}
          </>
        )}
      </div>
      <div className='px-6 py-4 text-center flex-1'>
        <h3 className='text-white text-xl font-title font-semibold uppercase'>
          {product.title}
        </h3>
        <small className='text-gray-400 text-sm font-body'>
          {product.categories}
        </small>
        <p className='text-gray-200 font-body'>{product.description}</p>
        <a href={product.url} target='_blank'>
          <Button
            color='primary'
            size='sm'
            className='text-white px-8 shadow-md mt-4'
          >
            Ver el artículo
          </Button>
        </a>
      </div>
      <EditProductModal
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
        product={product}
      />
    </Card>
  );
};
