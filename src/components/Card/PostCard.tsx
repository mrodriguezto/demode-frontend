import dayjs from "dayjs";
import { useState } from "react";
import toast from "react-hot-toast";
import { RiMore2Fill } from "react-icons/ri";

import demodeApi from "../../api/axios";
import { Button } from "../Button";
import { EditPostModal } from "../Modal";
import { CardMenu } from "./CardMenu";
import { WideCard } from "./WideCard";

type PostCardProps = {
  id: string;
  url: string;
  title: string;
  content: string;
  date: string;
  imgUrl: string;
  admin?: boolean;
};

export const PostCard = ({
  id,
  title,
  content,
  date,
  imgUrl,
  admin = false,
}: PostCardProps) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const formatedDate = dayjs(date)
    .locale("es")
    .format("ddd DD MMM [de] YYYY - HH:mm");

  const handleDelete = async () => {
    try {
      await demodeApi.delete(`/posts/${id}/delete`);
      window.location.reload(); // TODO: Update items with react redux
    } catch (error) {
      toast.error("No se logró eliminar el item");
    }
  };

  return (
    <WideCard imgSrc={imgUrl}>
      <div className='relative'>
        <small className='text-gray-600 text-sm font-body'>
          {formatedDate}
        </small>
        <h3 className='font-title font-bold text-xl'>{title}</h3>
        <p className='text-gray-200 font-body'>{content}</p>
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
                dataTarget={`#editPostModal${id}`}
                dataToggle='modal'
              />
            )}
          </>
        )}
      </div>
      <EditPostModal
        callback={() => {}}
        id={id}
        initialValues={{
          content,
          title,
        }}
      />
    </WideCard>
  );
};
